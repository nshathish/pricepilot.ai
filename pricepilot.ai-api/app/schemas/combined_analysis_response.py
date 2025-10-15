from pydantic import BaseModel

from app.schemas.clearance_analysis_response import ClearanceAnalysisResponse
from app.schemas.clearance_products_response import ClearanceProductsResponse


class CombinedAnalysisResponse(BaseModel):
    clearance_products: ClearanceProductsResponse
    campaign_analysis: ClearanceAnalysisResponse