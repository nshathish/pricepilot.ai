from typing import TYPE_CHECKING

from sqlmodel import SQLModel, Field, Relationship
from datetime import date
from decimal import Decimal

if TYPE_CHECKING:
    from app.models import Competitor, Product


class CompetitorPrice(SQLModel, table=True):
    __tablename__ = "competitor_prices"

    competitor_id: int = Field(foreign_key="competitors.id", primary_key=True)
    product_id: int = Field(foreign_key="products.product_id", primary_key=True)
    price_date: date = Field(primary_key=True)
    price: Decimal

    competitor: "Competitor" = Relationship(back_populates="prices")
    product: "Product" = Relationship(back_populates="competitor_prices")