from datetime import datetime, UTC
from decimal import Decimal
from typing import TYPE_CHECKING

from sqlmodel import SQLModel, Field, Column, BigInteger, DateTime, Relationship, ForeignKey, Numeric

from app.models import CampaignType, CampaignStatus

if TYPE_CHECKING:
    from app.models import (
        MarkdownActionLog,
        Channel
    )

class Campaign(SQLModel, table=True):
    __tablename__ = "campaigns"

    id: int = Field(
        sa_column=Column("campaign_id", BigInteger, primary_key=True, autoincrement=True)
    )
    name: str
    campaign_type: CampaignType
    start_date: datetime = Field(sa_column=Column("start_date", DateTime(timezone=True)))
    end_date: datetime = Field(sa_column=Column("end_date", DateTime(timezone=True)))
    target_audience: str | None = Field(default=None)
    budget: Decimal | None = Field(default=None, sa_column=Column(Numeric(12, 4)))
    status: CampaignStatus = Field(default=CampaignStatus.active)
    created_at: datetime = Field(
        default_factory=lambda: datetime.now(UTC),
        sa_column=Column(DateTime(timezone=True))
    )

    # Relationships
    campaign_channels: list["CampaignChannel"] = Relationship(back_populates="campaign")
    markdown_actions: list["MarkdownActionLog"] = Relationship(back_populates="campaign")


class CampaignChannel(SQLModel, table=True):
    __tablename__ = "campaign_channels"

    campaign_id: int = Field(
        sa_column=Column(BigInteger, ForeignKey("campaigns.campaign_id"), primary_key=True)
    )
    channel_id: int = Field(
        sa_column=Column(BigInteger, ForeignKey("channels.channel_id"), primary_key=True)
    )
    channel_budget: Decimal | None = Field(default=None, sa_column=Column(Numeric(12, 4)))
    priority: int = Field(default=1)  # 1 = highest priority
    custom_message: str | None = None
    created_at: datetime = Field(
        default_factory=lambda: datetime.now(UTC),
        sa_column=Column(DateTime(timezone=True))
    )

    # Relationships
    campaign: "Campaign" = Relationship(back_populates="campaign_channels")
    channel: "Channel" = Relationship(back_populates="campaign_channels")
