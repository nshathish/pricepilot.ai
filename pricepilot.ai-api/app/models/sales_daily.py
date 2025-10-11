from typing import TYPE_CHECKING

from sqlmodel import SQLModel, Field, Relationship
from datetime import date
from decimal import Decimal

if TYPE_CHECKING:
    from app.models import Product


class SalesDaily(SQLModel, table=True):
    __tablename__ = "sales_daily"

    product_id: int = Field(foreign_key="products.product_id", primary_key=True)
    sale_date: date = Field(primary_key=True)
    units_sold: int
    avg_unit_price: Decimal
    promo_flag: bool = False

    product: "Product" = Relationship(back_populates="sales")
