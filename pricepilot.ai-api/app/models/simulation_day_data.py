from datetime import datetime
from typing import Optional, List

from sqlmodel import SQLModel, Field, Column, JSON, BigInteger


class SimulationDayData(SQLModel, table=True):
    """Complete state for a single day - everything needed to render the UI"""
    __tablename__ = "simulation_day_data"

    id: Optional[int] = Field(
        default=None,
        sa_column=Column("id", BigInteger, primary_key=True, autoincrement=True)
    )
    simulation_id: int = Field(foreign_key="campaign_simulations.simulation_id", index=True)
    day_number: int = Field(index=True)

    # Complete product states for this day (array of Product objects)
    products: List[dict] = Field(sa_column=Column(JSON))  # Full Product[] as JSON

    # Agent logs for this day (array of AgentLog objects)
    agent_logs: List[dict] = Field(sa_column=Column(JSON))  # AgentLog[] as JSON

    # Global metrics for this day
    global_metrics: dict = Field(sa_column=Column(JSON))  # GlobalMetrics as JSON

    # Metadata
    calculated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        arbitrary_types_allowed = True
