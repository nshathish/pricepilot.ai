from typing import TYPE_CHECKING

from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime, UTC
from decimal import Decimal

if TYPE_CHECKING:
    from app.models import Product, ActionOutcome

class MarkdownActionLog(SQLModel, table=True):
    __tablename__ = "markdown_actions_log"

    id: int = Field(primary_key=True)
    product_id: int = Field(foreign_key="products.product_id")
    executed_at: datetime = Field(default_factory=lambda: datetime.now(UTC))

    before_price: Decimal
    after_price: Decimal
    stock_at_action: int
    expected_profit: Decimal
    baseline_profit: Decimal
    delta_expected_profit: Decimal
    notes: str | None = None

    product: "Product" = Relationship(back_populates="markdown_actions")
    outcomes: list["ActionOutcome"] = Relationship(back_populates="action")
