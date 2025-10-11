from sqlmodel import SQLModel, Field, Relationship


class Competitor(SQLModel, table=True):
    __tablename__ = "competitors"

    id: int = Field(default=None, primary_key=True, alias="competitor_id")
    name: str = Field(unique=True)
    url: str | None = None

    prices: list["CompetitorPrice"] = Relationship(back_populates="competitor")
