from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from decimal import Decimal


class PriceHistory(SQLModel, table=True):
    __tablename__ = "price_history"

    id: int = Field(default=None, primary_key=True, alias="price_id")
    productId: int = Field(alias="product_id", foreign_key="products.product_id")
    price: Decimal
    markdownPct: Decimal = Field(default=Decimal(0), alias="markdown_pct")
    startedAt: datetime = Field(default_factory=datetime.utcnow, alias="started_at")
    endedAt: datetime | None = Field(default=None, alias="ended_at")

    product: "Product" = Relationship(back_populates="priceHistories")
