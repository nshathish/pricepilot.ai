import json
from pathlib import Path

from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.config import Settings, get_settings
from app.core.security import get_api_key
from app.db.repositories.product_repository import get_products_to_filter_by_ai
from app.db.sessions import get_session
from app.schemas.clearance_analysis_response import ClearanceAnalysisResponse
from app.schemas.clearance_products_response import ClearanceProductsResponse
from app.services.ai.clearance_service import find_clearance_products, view_clearance_detailed_analysis

router = APIRouter(dependencies=[Depends(get_api_key)])


@router.get("/products", response_model=ClearanceProductsResponse)
async def get_products_for_analysis(
        session: Session = Depends(get_session),
        settings: Settings = Depends(get_settings)
):
    products = get_products_to_filter_by_ai(session)
    if (not settings.use_mock_data):
        return await find_clearance_products(products, settings.anthropy_api_key)

    mock_file = Path(__file__).parents[4] / "mocks" / "clearance_products_mock.json"
    if not mock_file.exists():
        raise FileNotFoundError(f"Mock file not found at: {mock_file}")

    with open(mock_file, 'r') as f:
        mock_data = json.load(f)
        return mock_data


@router.get("/analysis", response_model=ClearanceAnalysisResponse)
async def get_clearance_analysis_summary(
        session: Session = Depends(get_session),
        settings: Settings = Depends(get_settings)
):
    products = get_products_to_filter_by_ai(session)
    if (not settings.use_mock_data):
        return await view_clearance_detailed_analysis(products, settings.anthropy_api_key)

    mock_file = Path(__file__).parents[4] / "mocks" / "clearance_analysis_mock.json"
    if not mock_file.exists():
        raise FileNotFoundError(f"Mock file not found at: {mock_file}")

    with open(mock_file, 'r') as f:
        mock_data = json.load(f)
        return mock_data

