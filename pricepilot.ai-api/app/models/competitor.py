from typing import TYPE_CHECKING

from sqlmodel import SQLModel, Field, Relationship, Column, BigInteger

if TYPE_CHECKING:
    from app.models import CompetitorPrice

class Competitor(SQLModel, table=True):
    __tablename__ = "competitors"

    id: int = Field(
        sa_column=Column("competitor_id", BigInteger, primary_key=True, autoincrement=True)
    )
    name: str = Field(index=True)  # make unique in migration/DDL
    url: str | None = None

    prices: list["CompetitorPrice"] = Relationship(back_populates="competitor")
