from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from decimal import Decimal


class ActionOutcome(SQLModel, table=True):
    __tablename__ = "action_outcomes"

    actionId: int = Field(primary_key=True, alias="action_id", foreign_key="markdown_actions_log.action_id")
    windowStart: datetime = Field(primary_key=True, alias="window_start")
    windowEnd: datetime = Field(primary_key=True, alias="window_end")
    actualUnitsSold: int = Field(alias="actual_units_sold")
    actualProfit: Decimal = Field(alias="actual_profit")

    action: "MarkdownActionLog" = Relationship(back_populates="outcomes")
