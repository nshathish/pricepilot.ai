from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from app.core.config import Settings, get_settings
from app.db.repositories.product_repository import get_products_to_filter_by_ai
from app.db.sessions import get_session
from app.models import Product
from app.services.clearance_service import analyze_clearance_products

router = APIRouter()


@router.get("/", response_model=list[Product])
def get_products(session: Session = Depends(get_session)):
    products = session.exec(select(Product)).all()
    return products


@router.get("/analyze-clearance")
async def analyze_clearance(session: Session = Depends(get_session)):
    # Get all products from DB
    products = session.exec(select(Product)).all()

    # Call your AI service
    analysis_result = await analyze_clearance_products(products)

    return analysis_result


@router.get("/clearance")
async def get_products_for_analysis(
        session: Session = Depends(get_session),
        settings: Settings = Depends(get_settings)
):
    products = get_products_to_filter_by_ai(session)
    return await analyze_clearance_products(products, settings.anthropy_api_key)
