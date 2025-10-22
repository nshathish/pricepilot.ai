from dataclasses import dataclass
from decimal import Decimal
from datetime import date


@dataclass
class ProductMetrics:
    """Structured data class for product analysis metrics."""
    id: int
    sku: str
    product_name: str
    category: str
    brand: str
    status: str

    # Pricing
    unit_cost: Decimal
    base_price: Decimal
    current_price: Decimal
    current_margin: Decimal
    margin_percentage: float

    # Inventory
    stock_on_hand: int
    available_stock: int
    holding_cost_per_unit_per_day: Decimal

    # Sales Metrics (30-day window)
    total_units_sold_30d: int
    avg_daily_units: float
    units_last_15_days: int
    units_prev_15_days: int
    days_with_sales: int
    last_sale_date: date | None

    # Calculated Insights
    days_of_inventory: float
    sales_trend_pct: float | None
    stock_turnover_ratio: float

    # Markdown Info
    current_markdown_pct: float
    markdown_price: Decimal | None

    # Risk Flags
    approaching_clearance: bool
    zero_sales_flag: bool
    overstocked_flag: bool
    expiry_date: date | None

    # Elasticity
    elasticity: Decimal | None
    elasticity_confidence: Decimal | None

    # Recommendations
    max_discount_pct_suggested: float
