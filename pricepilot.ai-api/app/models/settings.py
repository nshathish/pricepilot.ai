from typing import Any
from datetime import datetime, UTC
from decimal import Decimal

from sqlalchemy.dialects.postgresql import JSONB
from sqlmodel import (
    SQLModel,
    Field,
    Column,
    BigInteger,
    DateTime,
    JSON,
    Numeric,
    Text,
    Enum as SQLEnum
)

from app.models import AuditAction, ChangeSource


class Setting(SQLModel, table=True):
    __tablename__ = "settings"

    key: str = Field(primary_key=True)
    value: Any = Field(sa_column=Column("value", JSON))
    setting_type: str = Field(default="string", sa_column=Column("setting_type"))
    description: str | None = None
    updated_at: datetime = Field(
        default_factory=lambda: datetime.now(UTC),
        sa_column=Column("updated_at", DateTime(timezone=True))
    )


class AuditLog(SQLModel, table=True):
    __tablename__ = "audit_log"

    id: int = Field(
        sa_column=Column("audit_id", BigInteger, primary_key=True, autoincrement=True)
    )
    table_name: str = Field(sa_column=Column(Text, nullable=False))
    record_id: int = Field(sa_column=Column(BigInteger, nullable=False))
    action: AuditAction = Field(sa_column=Column(SQLEnum(AuditAction), nullable=True))
    old_values: dict | None = Field(default=None, sa_column=Column(JSONB, nullable=True))
    new_values: dict | None = Field(default=None, sa_column=Column(JSONB, nullable=True))
    change_source: ChangeSource = Field(
        default=ChangeSource.system,
        sa_column=Column(SQLEnum(ChangeSource), nullable=False)
    )
    changed_at: datetime = Field(
        default_factory=lambda: datetime.now(UTC),
        sa_column=Column(DateTime(timezone=True), nullable=False)
    )


class PerformanceMetric(SQLModel, table=True):
    __tablename__ = "performance_metrics"

    id: int = Field(
        sa_column=Column(BigInteger, autoincrement=True, primary_key=True)
    )
    metric_name: str = Field(sa_column=Column("metric_name"))
    metric_value: Decimal = Field(sa_column=Column(Numeric(12, 4)))
    dimensions: dict | None = Field(default=None, sa_column=Column("dimensions", JSON))
    measured_at: datetime = Field(
        default_factory=lambda: datetime.now(UTC),
        sa_column=Column("measured_at", DateTime(timezone=True))
    )
