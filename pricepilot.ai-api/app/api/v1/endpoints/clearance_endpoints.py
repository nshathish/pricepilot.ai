import json
import time
from pathlib import Path

from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.config import Settings, get_settings
from app.core.security import get_api_key
from app.db.sessions import get_session
from app.schemas.responses.combined_analysis_response import CombinedAnalysisResponse
from app.services.ai.clearance_service import get_clearance_products_and_detailed_analysis
from app.services.product_analysis_service import ProductAnalysisService

router = APIRouter(dependencies=[Depends(get_api_key)])


@router.get("/combined", response_model=CombinedAnalysisResponse)
async def get_clearance_products_and_analysis(
        session: Session = Depends(get_session),
        settings: Settings = Depends(get_settings)
):
    product_analysis_service = ProductAnalysisService()
    ai_analysis = {}
    if not settings.use_mock_data:
        products = product_analysis_service.get_products_for_ai_analysis(session)
        ai_analysis = await get_clearance_products_and_detailed_analysis(
            products,
            settings.anthropy_api_key,
        )
    else:
        mock_file = Path(__file__).parents[4] / "mocks" / "combined_clearance_mock.json"
        if not mock_file.exists():
            raise FileNotFoundError(f"Mock file not found at: {mock_file}")

        with open(mock_file, 'r') as f:
            ai_analysis = json.load(f)
        time.sleep(10)

    # Save the campaign simulation using repository
    # try:
    #     campaign_repo = CampaignRepository(session)
    #     simulation = campaign_repo.create_simulation(ai_analysis)
    #     ai_analysis["simulation_id"] = simulation.id
    # except Exception as e:
    #     print(f"Failed to create simulation: {e}")
    #     # Don't fail the request if simulation creation fails

    return ai_analysis
