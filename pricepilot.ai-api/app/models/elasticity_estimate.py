from typing import TYPE_CHECKING

from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime, UTC
from decimal import Decimal

if TYPE_CHECKING:
    from app.models import Product


class ElasticityEstimate(SQLModel, table=True):
    __tablename__ = "elasticity_estimates"

    product_id: int = Field(foreign_key="products.product_id", primary_key=True)
    elasticity: Decimal
    method: str
    sample_size: int | None = None
    confidence: Decimal | None = None
    last_updated: datetime = Field(default_factory=lambda: datetime.now(UTC))

    product: "Product" = Relationship(back_populates="elasticity_estimate")