from typing import TYPE_CHECKING

from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime, UTC
from decimal import Decimal

if TYPE_CHECKING:
    from app.models import Product

class MarkdownEvaluation(SQLModel, table=True):
    __tablename__ = "markdown_evaluations"

    id: int = Field(primary_key=True)
    product_id: int = Field(foreign_key="products.product_id")
    evaluated_at: datetime = Field(default_factory=lambda: datetime.now(UTC))

    baseline_price: Decimal
    baseline_expected_units: int
    baseline_expected_profit: Decimal

    markdown_pct: Decimal
    candidate_price: Decimal
    expected_units: int
    expected_profit: Decimal
    expected_days_to_sell: int | None = None
    expected_unsold_units: int | None = None
    is_optimal: bool = False

    product: "Product" = Relationship(back_populates="markdown_evaluations")