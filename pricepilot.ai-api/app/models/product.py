from datetime import date, datetime
from decimal import Decimal

from sqlmodel import SQLModel, Field, Relationship

from app.models.product_status import ProductStatus


class Product(SQLModel, table=True):
    __tablename__ = "products"

    id: int = Field(default=None, primary_key=True, alias="product_id")
    sku: str = Field(unique=True)
    name: str
    category: str | None = None
    brand: str | None = None
    unitCost: Decimal = Field(sa_column_kwargs={"name": "unit_cost"})
    basePrice: Decimal = Field(sa_column_kwargs={"name": "base_price"})
    currentPrice: Decimal = Field(sa_column_kwargs={"name": "current_price"})
    holdingCostPerUnitPerDay: Decimal = Field(
        default=Decimal(0),
        sa_column_kwargs={"name": "holding_cost_per_unit_per_day"},
    )
    clearanceEndDate: date = Field(sa_column_kwargs={"name": "clearance_end_date"})
    status: ProductStatus = Field(default=ProductStatus.active)
    createdAt: datetime = Field(
        default_factory=datetime.utcnow,
        sa_column_kwargs={"name": "created_at"},
    )

    inventories: list["Inventory"] = Relationship(back_populates="product")
    priceHistories: list["PriceHistory"] = Relationship(back_populates="product")
    sales: list["SalesDaily"] = Relationship(back_populates="product")
    elasticityEstimate: "ElasticityEstimate" | None = Relationship(back_populates="product")
    competitorPrices: list["CompetitorPrice"] = Relationship(back_populates="product")
    markdownEvaluations: list["MarkdownEvaluation"] = Relationship(back_populates="product")
    markdownActions: list["MarkdownActionLog"] = Relationship(back_populates="product")