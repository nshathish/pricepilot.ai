from datetime import date
from decimal import Decimal
from typing import TYPE_CHECKING

from sqlmodel import SQLModel, Field, Relationship, Column, BigInteger, ForeignKey, Date, Numeric

if TYPE_CHECKING:
    from app.models import Competitor, Product


class CompetitorPrice(SQLModel, table=True):
    __tablename__ = "competitor_prices"

    competitor_id: int = Field(
        sa_column=Column("competitor_id", BigInteger, ForeignKey("competitors.competitor_id"), primary_key=True)
    )
    product_id: int = Field(
        sa_column=Column("product_id", BigInteger, ForeignKey("products.product_id"), primary_key=True)
    )
    price_date: date = Field(
        sa_column=Column("price_date", Date, primary_key=True)
    )
    price: Decimal = Field(sa_column=Column(Numeric(12, 4)))

    competitor: "Competitor" = Relationship(back_populates="prices")
    product: "Product" = Relationship(back_populates="competitor_prices")
