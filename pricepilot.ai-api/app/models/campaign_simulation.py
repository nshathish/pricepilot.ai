from datetime import datetime
from typing import Optional, List

from sqlmodel import SQLModel, Field, Column, JSON, BigInteger


class CampaignSimulation(SQLModel, table=True):
    """Main simulation record"""
    __tablename__ = "campaign_simulations"

    simulation_id: Optional[int] = Field(
        default=None,
        sa_column=Column("simulation_id", BigInteger, primary_key=True, autoincrement=True)
    )

    product_ids: List[int] = Field(sa_column=Column(JSON))
    ai_analysis_json: dict = Field(sa_column=Column(JSON))
    duration_days: int = Field(default=7)
    is_active: bool = Field(default=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
