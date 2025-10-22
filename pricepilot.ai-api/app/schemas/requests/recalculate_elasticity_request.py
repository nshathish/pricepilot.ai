from pydantic import BaseModel

from app.models import ElasticityMethod


class RecalculateElasticityRequest(BaseModel):
    elasticity_method: ElasticityMethod
    include_promo: bool = True
    product_ids: list[int] | None = None
