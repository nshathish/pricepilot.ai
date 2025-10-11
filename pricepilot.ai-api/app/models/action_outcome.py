from typing import TYPE_CHECKING

from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from decimal import Decimal

if TYPE_CHECKING:
    from app.models import MarkdownActionLog


class ActionOutcome(SQLModel, table=True):
    __tablename__ = "action_outcomes"

    action_id: int = Field(foreign_key="markdown_actions_log.id", primary_key=True)
    window_start: datetime = Field(primary_key=True)
    window_end: datetime = Field(primary_key=True)

    actual_units_sold: int
    actual_profit: Decimal

    action: "MarkdownActionLog" = Relationship(back_populates="outcomes")
