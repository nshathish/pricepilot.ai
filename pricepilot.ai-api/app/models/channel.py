from datetime import datetime, UTC
from decimal import Decimal
from typing import TYPE_CHECKING

from sqlmodel import SQLModel, Field, Column, BigInteger, DateTime, Relationship, Numeric

if TYPE_CHECKING:
    from app.models import SalesDaily, CampaignChannel


class Channel(SQLModel, table=True):
    __tablename__ = "channels"

    id: int = Field(
        sa_column=Column("channel_id", BigInteger, primary_key=True, autoincrement=True)
    )
    name: str = Field(unique=True)
    average_conversion_rate: Decimal | None = Field(default=None, sa_column=Column(Numeric))
    is_active: bool = Field(default=True)
    created_at: datetime = Field(
        default_factory=lambda: datetime.now(UTC),
        sa_column=Column("created_at", DateTime(timezone=True))
    )

    # Relationships
    sales: list["SalesDaily"] = Relationship(back_populates="channel")
    campaign_channels: list["CampaignChannel"] = Relationship(back_populates="channel")