from sqlmodel import SQLModel, Field, Relationship
from datetime import date
from decimal import Decimal


class CompetitorPrice(SQLModel, table=True):
    __tablename__ = "competitor_prices"

    competitorId: int = Field(primary_key=True, alias="competitor_id", foreign_key="competitors.competitor_id")
    productId: int = Field(primary_key=True, alias="product_id", foreign_key="products.product_id")
    priceDate: date = Field(primary_key=True, alias="price_date")
    price: Decimal

    competitor: "Competitor" = Relationship(back_populates="prices")
    product: "Product" = Relationship(back_populates="competitorPrices")
