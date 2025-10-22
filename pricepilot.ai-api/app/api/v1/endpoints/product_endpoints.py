from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from app.core.security import get_api_key

from app.db.sessions import get_session
from app.models import Product
from app.services.product_analysis_service import ProductAnalysisService

router = APIRouter(dependencies=[Depends(get_api_key)])


@router.get("/", response_model=list[Product])
def get_products(session: Session = Depends(get_session)):
    products = session.exec(select(Product)).all()
    return products


@router.get("/analysis")
def get_products_analysis(session: Session = Depends(get_session)):
    product_analysis_service = ProductAnalysisService()
    return product_analysis_service.get_products_for_ai_analysis(session)
