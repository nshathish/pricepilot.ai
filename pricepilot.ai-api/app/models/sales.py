from typing import TYPE_CHECKING, Optional
from datetime import date
from decimal import Decimal

from sqlmodel import SQLModel, Field, Relationship, Column, Numeric, BigInteger, ForeignKey


if TYPE_CHECKING:
    from app.models import Product, Channel


class SalesDaily(SQLModel, table=True):
    __tablename__ = "sales_daily"

    product_id: int = Field(
        sa_column=Column(BigInteger, ForeignKey("products.product_id"), primary_key=True)
    )
    channel_id: int | None = Field(
        default=None,
        sa_column=Column(BigInteger, ForeignKey("channels.channel_id"))
    )
    sale_date: date = Field(primary_key=True)
    units_sold: int
    avg_unit_price: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    promo_flag: bool = Field(default=False)

    return_rate: Decimal | None = Field(default=None)
    gross_margin: Decimal | None = Field(default=None)

    product: "Product" = Relationship(back_populates="sales")
    channel: Optional["Channel"] = Relationship(back_populates="sales")
