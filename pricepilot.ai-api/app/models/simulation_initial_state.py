from typing import Optional, List

from sqlmodel import SQLModel, Field, Column, JSON, BigInteger

class SimulationInitialState(SQLModel, table=True):
    """Initial product states (Day 0) for the simulation"""
    __tablename__ = "simulation_initial_states"

    id: Optional[int] = Field(
        default=None,
        sa_column=Column("id", BigInteger, primary_key=True, autoincrement=True)
    )
    simulation_id: int = Field(foreign_key="campaign_simulations.simulation_id", index=True)

    # Initial products array
    initial_products: List[dict] = Field(sa_column=Column(JSON))  # Product[] as JSON

    # Initial global metrics
    initial_metrics: dict = Field(sa_column=Column(JSON))  # GlobalMetrics as JSON

    class Config:
        arbitrary_types_allowed = True