from sqlmodel import SQLModel, Field
from datetime import datetime
from typing import Any


class Setting(SQLModel, table=True):
    __tablename__ = "settings"

    key: str = Field(primary_key=True)
    value: Any
    updatedAt: datetime = Field(default_factory=datetime.utcnow, alias="updated_at")
