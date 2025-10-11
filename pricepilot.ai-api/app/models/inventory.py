from sqlmodel import SQLModel, Field, Relationship


class Inventory(SQLModel, table=True):
    __tablename__ = "inventory"

    productId: int = Field(primary_key=True, alias="product_id")
    location: str = Field(default="main", primary_key=True)
    stockOnHand: int = Field(alias="stock_on_hand")
    reserved: int = Field(default=0)

    product: "Product" = Relationship(back_populates="inventories")
