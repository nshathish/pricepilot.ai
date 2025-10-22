from pydantic import BaseModel

from app.schemas.responses.clearance_analysis_response import ClearanceAnalysisResponse
from app.schemas.responses.clearance_products_response import ClearanceProductsResponse


class CombinedAnalysisResponse(BaseModel):
    clearance_products: ClearanceProductsResponse
    campaign_analysis: ClearanceAnalysisResponse