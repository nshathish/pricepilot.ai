from typing import TYPE_CHECKING, Optional

from sqlmodel import SQLModel, Field, Relationship, Column, Integer
from datetime import datetime, UTC
from decimal import Decimal
from enum import Enum

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


class ProductStatus(str, Enum):
    active = "active"
    discontinued = "discontinued"


class Product(SQLModel, table=True):
    __tablename__ = "products"

    id: int = Field(
        sa_column=Column("product_id", Integer, primary_key=True, autoincrement=True)
    )
    sku: str = Field(index=True)
    name: str
    category: str | None = None
    brand: str | None = None

    unit_cost: Decimal
    base_price: Decimal
    current_price: Decimal
    holding_cost_per_unit_per_day: Decimal = Field(default=Decimal('0'))
    clearance_end_date: datetime
    status: ProductStatus = ProductStatus.active
    created_at: datetime = Field(default_factory=lambda: datetime.now(UTC))

    inventories: list["Inventory"] = Relationship(back_populates="product")
    price_histories: list["PriceHistory"] = Relationship(back_populates="product")
    sales: list["SalesDaily"] = Relationship(back_populates="product")
    elasticity_estimate: Optional["ElasticityEstimate"] | None = Relationship(back_populates="product")
    competitor_prices: list["CompetitorPrice"] = Relationship(back_populates="product")
    markdown_evaluations: list["MarkdownEvaluation"] = Relationship(back_populates="product")
    markdown_actions: list["MarkdownActionLog"] = Relationship(back_populates="product")
