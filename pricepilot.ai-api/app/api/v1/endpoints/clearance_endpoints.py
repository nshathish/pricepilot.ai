from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.config import Settings, get_settings
from app.core.security import get_api_key
from app.db.repositories.product_repository import get_products_to_filter_by_ai
from app.db.sessions import get_session
from app.schemas.combined_analysis_response import CombinedAnalysisResponse
from app.services.ai.clearance_service import get_clearance_products_and_detailed_analysis

router = APIRouter(dependencies=[Depends(get_api_key)])


@router.get("/combined", response_model=CombinedAnalysisResponse)
async def get_clearance_products_and_analysis(
        session: Session = Depends(get_session),
        settings: Settings = Depends(get_settings)
):
    products = get_products_to_filter_by_ai(session)
    return await get_clearance_products_and_detailed_analysis(
        products,
        settings.anthropy_api_key,
    )
