import logging

from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, delete, select

from app.core.security import get_api_key
from app.db.sessions import get_session
from app.models import Product, ElasticityEstimate
from app.schemas.requests.recalculate_elasticity_request import RecalculateElasticityRequest
from app.services.ai.elasticity_service import estimate_elasticity_for_product

logger = logging.getLogger(__name__)
router = APIRouter(dependencies=[Depends(get_api_key)])


@router.post("/recalculate")
def recalculate_all_elasticity(
        request: RecalculateElasticityRequest,
        session: Session = Depends(get_session)
):
    try:
        delete_result = session.exec(delete(ElasticityEstimate))
        deleted_count = delete_result.rowcount if hasattr(delete_result, 'rowcount') else 0
        session.commit()

        if request.product_ids:
            products = session.exec(
                select(Product).where(Product.id.in_(request.product_ids))
            ).all()
        else:
            products = session.exec(select(Product)).all()

        total_products = len(products)

        if total_products == 0:
            return {
                "message": "No products found in database",
                "total_products": 0,
                "updated": 0,
                "failed": 0
            }

        updated = 0
        failed = 0
        failed_products = []

        for product in products:
            try:
                estimate = estimate_elasticity_for_product(
                    session,
                    product.id,
                    method=request.elasticity_method,
                    include_promo=request.include_promo
                )

                if estimate:
                    session.merge(estimate)
                    updated += 1
                else:
                    failed += 1
                    failed_products.append(product.id)
                    logger.warning(f"❌ Product {product.id}: estimation failed (insufficient data)")

            except Exception as e:
                failed += 1
                failed_products.append(product.id)
                logger.error(f"💥 Product {product.id}: error - {e}")

        session.commit()

        success_rate = (updated / total_products * 100) if total_products > 0 else 0

        return {
            "message": f"Elasticity estimates updated for {updated} products",
            "total_products": total_products,
            "updated": updated,
            "failed": failed,
            "success_rate": round(success_rate, 1),
            "method_used": request.elasticity_method.value,
            "include_promo": request.include_promo,
            "deleted_existing": deleted_count,
            "failed_product_ids": failed_products,
        }
    except Exception as e:
        logger.error(f"Batch elasticity recalculation failed: {e}")
        session.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Failed to recalculate elasticity estimates: {str(e)}"
        )
