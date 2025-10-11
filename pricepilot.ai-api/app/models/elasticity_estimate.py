from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from decimal import Decimal


class ElasticityEstimate(SQLModel, table=True):
    __tablename__ = "elasticity_estimates"

    productId: int = Field(primary_key=True, alias="product_id", foreign_key="products.product_id")
    elasticity: Decimal
    method: str
    sampleSize: int | None = Field(default=None, alias="sample_size")
    confidence: Decimal | None = None
    lastUpdated: datetime = Field(default_factory=datetime.utcnow, alias="last_updated")

    product: "Product" = Relationship(back_populates="elasticityEstimate")
