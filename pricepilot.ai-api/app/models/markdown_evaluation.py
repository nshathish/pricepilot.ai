from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from decimal import Decimal


class MarkdownEvaluation(SQLModel, table=True):
    __tablename__ = "markdown_evaluations"

    id: int = Field(default=None, primary_key=True, alias="eval_id")
    productId: int = Field(alias="product_id", foreign_key="products.product_id")
    evaluatedAt: datetime = Field(default_factory=datetime.utcnow, alias="evaluated_at")
    baselinePrice: Decimal = Field(alias="baseline_price")
    baselineExpectedUnits: int = Field(alias="baseline_expected_units")
    baselineExpectedProfit: Decimal = Field(alias="baseline_expected_profit")
    markdownPct: Decimal = Field(alias="markdown_pct")
    candidatePrice: Decimal = Field(alias="candidate_price")
    expectedUnits: int = Field(alias="expected_units")
    expectedProfit: Decimal = Field(alias="expected_profit")
    expectedDaysToSell: int | None = Field(default=None, alias="expected_days_to_sell")
    expectedUnsoldUnits: int | None = Field(default=None, alias="expected_unsold_units")
    isOptimal: bool = Field(default=False, alias="is_optimal")

    product: "Product" = Relationship(back_populates="markdownEvaluations")
