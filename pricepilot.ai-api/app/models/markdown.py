from typing import TYPE_CHECKING, Optional
from datetime import datetime, UTC
from decimal import Decimal

from sqlmodel import SQLModel, Field, Column, Relationship, BigInteger, ForeignKey, DateTime, Numeric

from app.models import ApprovalStatus

if TYPE_CHECKING:
    from app.models import (
        Product, Campaign
    )

class MarkdownEvaluation(SQLModel, table=True):
    __tablename__ = "markdown_evaluations"

    id: int = Field(
        sa_column=Column("eval_id", BigInteger, primary_key=True, autoincrement=True)
    )
    product_id: int = Field(
        sa_column=Column("product_id", BigInteger, ForeignKey("products.product_id"))
    )
    evaluated_at: datetime = Field(
        default_factory=lambda: datetime.now(UTC),
        sa_column=Column("evaluated_at", DateTime(timezone=True))
    )
    baseline_price: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    baseline_expected_units: int = Field(sa_column=Column("baseline_expected_units"))
    baseline_expected_profit: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    markdown_pct: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    candidate_price: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    expected_units: int = Field(sa_column=Column("expected_units"))
    expected_profit: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    expected_days_to_sell: int | None = Field(
        default=None,
        sa_column=Column("expected_days_to_sell")
    )
    expected_unsold_units: int | None = Field(
        default=None,
        sa_column=Column("expected_unsold_units")
    )
    is_optimal: bool = Field(default=False, sa_column=Column("is_optimal"))

    # Relationships
    product: "Product" = Relationship(back_populates="markdown_evaluations")


class MarkdownActionLog(SQLModel, table=True):
    __tablename__ = "markdown_actions_log"

    id: int = Field(
        sa_column=Column("action_id", BigInteger, primary_key=True, autoincrement=True)
    )
    product_id: int = Field(
        sa_column=Column("product_id", BigInteger, ForeignKey("products.product_id"))
    )
    executed_at: datetime = Field(
        default_factory=lambda: datetime.now(UTC),
        sa_column=Column("executed_at", DateTime(timezone=True))
    )
    stock_at_action: int
    notes: str | None = None
    before_price: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    after_price: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    expected_profit: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    baseline_profit: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    delta_expected_profit: Decimal = Field(sa_column=Column(Numeric(12, 4)))

    # Enhanced AI fields
    markdown_pct: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    confidence_score: Decimal | None = Field(
        default=None,
        sa_column=Column(Numeric(12, 4))
    )
    trigger_reason: str | None = Field(
        default=None,
        sa_column=Column("trigger_reason")
    )
    approval_status: ApprovalStatus = Field(
        default=ApprovalStatus.pending,
        sa_column=Column("approval_status")
    )
    campaign_id: int | None = Field(
        default=None,
        sa_column=Column("campaign_id", BigInteger, ForeignKey("campaigns.campaign_id"))
    )

    # Relationships
    product: "Product" = Relationship(back_populates="markdown_actions")
    campaign: Optional["Campaign"] = Relationship(back_populates="markdown_actions")
    outcomes: list["ActionOutcome"] = Relationship(back_populates="action")


class ActionOutcome(SQLModel, table=True):
    __tablename__ = "action_outcomes"

    action_id: int = Field(
        sa_column=Column("action_id", BigInteger, ForeignKey("markdown_actions_log.action_id"), primary_key=True)
    )
    window_start: datetime = Field(
        sa_column=Column("window_start", DateTime(timezone=True), primary_key=True)
    )
    window_end: datetime = Field(
        sa_column=Column("window_end", DateTime(timezone=True), primary_key=True)
    )
    actual_units_sold: int
    actual_profit: Decimal = Field(sa_column=Column(Numeric(12, 4)))

    # Relationships
    action: "MarkdownActionLog" = Relationship(back_populates="outcomes")