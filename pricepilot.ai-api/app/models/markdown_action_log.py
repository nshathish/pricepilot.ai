from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from decimal import Decimal


class MarkdownActionLog(SQLModel, table=True):
    __tablename__ = "markdown_actions_log"

    id: int = Field(default=None, primary_key=True, alias="action_id")
    productId: int = Field(alias="product_id", foreign_key="products.product_id")
    executedAt: datetime = Field(default_factory=datetime.utcnow, alias="executed_at")
    beforePrice: Decimal = Field(alias="before_price")
    afterPrice: Decimal = Field(alias="after_price")
    stockAtAction: int = Field(alias="stock_at_action")
    expectedProfit: Decimal = Field(alias="expected_profit")
    baselineProfit: Decimal = Field(alias="baseline_profit")
    deltaExpectedProfit: Decimal = Field(alias="delta_expected_profit")
    notes: str | None = None

    product: "Product" = Relationship(back_populates="markdownActions")
    outcomes: list["ActionOutcome"] = Relationship(back_populates="action")
