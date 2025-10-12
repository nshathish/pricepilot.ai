from fastapi import APIRouter, Depends
from fastapi.params import Query
from sqlmodel import Session, select, delete

from app.db.sessions import get_session
from app.models import Product, ElasticityEstimate
from app.schemas.elasticity_method import ElasticityMethod
from app.services.elasticity_service import estimate_elasticity_for_product

router = APIRouter()


@router.post("/recalculate")
def recalculate_all_elasticity(
        session: Session = Depends(get_session),
        elasticity_method: ElasticityMethod = Query(..., description="Choose regression method: log_log or bayesian")
):
    print(f"recalculate_all_elasticity: {elasticity_method.value}")

    # step 1: clean out old estimates
    session.exec(delete(ElasticityEstimate))
    session.commit()

    # step 2: recalculate for all products
    products = session.exec(select(Product)).all()
    updated = 0

    for product in products:
        print(f"Estimating elasticity for product ID {product.id}")
        estimate = estimate_elasticity_for_product(session, product.id, method=elasticity_method)
        if estimate:
            session.merge(estimate)
            updated += 1

    session.commit()

    return {"message": f"Elasticity estimates updated for {updated} products."}
