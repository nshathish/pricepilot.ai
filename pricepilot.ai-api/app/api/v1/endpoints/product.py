from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from app.db.sessions import get_session
from app.models import Product

router = APIRouter()


@router.get("/", response_model=list[Product])
def get_products(session: Session = Depends(get_session)):
    products = session.exec(select(Product)).all()
    return products
