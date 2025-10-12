from fastapi import APIRouter, Depends
from sqlmodel import Session, select

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
