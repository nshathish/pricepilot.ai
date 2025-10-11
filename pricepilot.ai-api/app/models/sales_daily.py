from sqlmodel import SQLModel, Field, Relationship
from datetime import date
from decimal import Decimal


class SalesDaily(SQLModel, table=True):
    __tablename__ = "sales_daily"

    productId: int = Field(primary_key=True, alias="product_id", foreign_key="products.product_id")
    saleDate: date = Field(primary_key=True, alias="sale_date")
    unitsSold: int = Field(alias="units_sold")
    avgUnitPrice: Decimal = Field(alias="avg_unit_price")
    promoFlag: bool = Field(default=False, alias="promo_flag")

    product: "Product" = Relationship(back_populates="sales")
