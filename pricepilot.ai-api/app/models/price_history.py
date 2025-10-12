from typing import TYPE_CHECKING

from sqlmodel import SQLModel, Field, Relationship, Column, Integer
from datetime import datetime, UTC
from decimal import Decimal

if TYPE_CHECKING:
    from app.models import Product


class PriceHistory(SQLModel, table=True):
    __tablename__ = "price_history"

    id: int = Field(
        sa_column=Column("price_id", Integer, primary_key=True, autoincrement=True)
    )
    product_id: int = Field(foreign_key="products.product_id")
    price: Decimal
    markdown_pct: Decimal = 0
    started_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
    ended_at: datetime | None = None

    product: "Product" = Relationship(back_populates="price_histories")
