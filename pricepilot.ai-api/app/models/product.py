from typing import TYPE_CHECKING, Optional
from datetime import datetime, UTC
from decimal import Decimal

from sqlmodel import SQLModel, Field, Relationship, Column, BigInteger, ARRAY, Numeric, String as SAString


from app.models import ProductStatus, Seasonality

if TYPE_CHECKING:
    # These imports only run during type checking / IDE analysis
    from app.models import (
        Inventory,
        PriceHistory,
        SalesDaily,
        ElasticityEstimate,
        CompetitorPrice,
        MarkdownEvaluation,
        MarkdownActionLog,
    )


class Product(SQLModel, table=True):
    __tablename__ = "products"

    id: int = Field(
        sa_column=Column("product_id", BigInteger, primary_key=True, autoincrement=True)
    )
    sku: str = Field(index=True)
    name: str
    category: str | None = None
    brand: str | None = None

    unit_cost: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    base_price: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    current_price: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    holding_cost_per_unit_per_day: Decimal = Field(default=Decimal('0'))
    expiry_date: datetime | None
    status: ProductStatus = ProductStatus.active
    seasonality: Seasonality | None = None
    tags: list[str] = Field(
        default_factory=list,
        sa_column=Column("tags", ARRAY(SAString))
    )
    min_stock_level: int | None = Field(default=None)
    max_stock_level: int | None = Field(default=None)

    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC))

    inventories: list["Inventory"] = Relationship(back_populates="product")
    price_histories: list["PriceHistory"] = Relationship(back_populates="product")
    sales: list["SalesDaily"] = Relationship(back_populates="product")
    elasticity_estimate: Optional["ElasticityEstimate"] | None = Relationship(back_populates="product")
    competitor_prices: list["CompetitorPrice"] = Relationship(back_populates="product")
    markdown_evaluations: list["MarkdownEvaluation"] = Relationship(back_populates="product")
    markdown_actions: list["MarkdownActionLog"] = Relationship(back_populates="product")
