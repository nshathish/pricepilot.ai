from typing import TYPE_CHECKING

from sqlmodel import SQLModel, Field, Relationship

if TYPE_CHECKING:
    from app.models import Product

class Inventory(SQLModel, table=True):
    __tablename__ = "inventory"

    product_id: int = Field(foreign_key="products.product_id", primary_key=True)
    location: str = Field(default="main", primary_key=True)
    stock_on_hand: int
    reserved: int = Field(default=0)

    product: "Product" = Relationship(back_populates="inventories")
