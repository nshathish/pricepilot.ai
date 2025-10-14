from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.config import Settings, get_settings
from app.core.security import get_api_key
from app.db.repositories.product_repository import get_products_to_filter_by_ai
from app.db.sessions import get_session
from app.schemas.clearance_candidate import ClearanceAnalysisResponse
from app.services.clearance_service import find_clearance_products, view_clearance_detailed_analysis

router = APIRouter(dependencies=[Depends(get_api_key)])


@router.get("/products", response_model=ClearanceAnalysisResponse)
async def get_products_for_analysis(
        session: Session = Depends(get_session),
        settings: Settings = Depends(get_settings)
):
    products = get_products_to_filter_by_ai(session)
    return await find_clearance_products(products, settings.anthropy_api_key)


@router.get("/analysis", response_model=str)
async def get_clearance_analysis_summary(
        session: Session = Depends(get_session),
        settings: Settings = Depends(get_settings)
):
    products = get_products_to_filter_by_ai(session)
    return await view_clearance_detailed_analysis(products, settings.anthropy_api_key)
