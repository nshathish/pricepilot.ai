from typing import TYPE_CHECKING
from datetime import datetime, UTC
from decimal import Decimal

from sqlmodel import (
    SQLModel,
    Field,
    Relationship,
    Column,
    BigInteger,
    ForeignKey,
    TIMESTAMP,
    Numeric,
    ARRAY,
    Text,
    JSON
)


if TYPE_CHECKING:
    from app.models import Product


class ElasticityEstimate(SQLModel, table=True):
    __tablename__ = "elasticity_estimates"

    product_id: int = Field(
        sa_column=Column("product_id", BigInteger, ForeignKey("products.product_id"), primary_key=True)
    )
    elasticity: Decimal = Field(sa_column=Column(Numeric(8, 4)))
    method: str
    sample_size: int | None = None
    confidence: Decimal | None = Field(default=None, sa_column=Column(Numeric(5, 2)))

    # Enhanced features tracking
    features_used: list[str] | None = Field(
        default=None,
        sa_column=Column(ARRAY(Text))
    )
    feature_count: int | None = Field(default=None)
    model_r_squared: Decimal | None = Field(default=None, sa_column=Column(Numeric(6, 4)))

    # Optional: Store feature importance/coefficients as JSON
    feature_coefficients: dict | None = Field(
        default=None,
        sa_column=Column(JSON)
    )

    last_updated: datetime = Field(
        default_factory=lambda: datetime.now(UTC),
        sa_column=Column(TIMESTAMP(timezone=True))
    )

    product: "Product" = Relationship(back_populates="elasticity_estimate")