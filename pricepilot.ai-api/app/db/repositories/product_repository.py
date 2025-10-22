from datetime import timedelta, datetime
from typing import Any, Sequence
from warnings import deprecated

from sqlalchemy import Row, RowMapping
from sqlmodel import Session, Numeric, Float, select, func, case, cast, and_, or_

from app.models import SalesDaily, PriceHistory, Product, Inventory, ElasticityEstimate


@deprecated("This is replaced by the ProductAnalysisService")
def get_products_to_filter_by_ai(session: Session) -> Sequence[Row[Any] | RowMapping | Any]:
    current_date = datetime.now().date()
    thirty_days_ago = current_date - timedelta(days=30)
    fifteen_days_ago = current_date - timedelta(days=15)

    # Subquery for sales metrics (last 30 days)
    sales_subquery = (
        select(
            SalesDaily.product_id,
            func.count(func.distinct(SalesDaily.sale_date)).label('days_with_sales'),
            func.sum(SalesDaily.units_sold).label('total_units_sold_30d'),
            func.avg(SalesDaily.units_sold).label('avg_daily_units'),
            func.sum(
                case(
                    (SalesDaily.sale_date >= fifteen_days_ago, SalesDaily.units_sold),
                    else_=0
                )
            ).label('units_last_15_days'),
            func.sum(
                case(
                    (and_(
                        SalesDaily.sale_date >= thirty_days_ago,
                        SalesDaily.sale_date < fifteen_days_ago
                    ), SalesDaily.units_sold),
                    else_=0
                )
            ).label('units_prev_15_days'),
            func.max(SalesDaily.sale_date).label('last_sale_date')
        )
        .where(SalesDaily.sale_date >= thirty_days_ago)
        .group_by(SalesDaily.product_id)
        .subquery()
    )

    # Subquery for current markdown
    markdown_subquery = (
        select(
            PriceHistory.product_id,
            PriceHistory.markdown_pct,
            PriceHistory.price.label('markdown_price'),
            PriceHistory.started_at,
            func.row_number().over(
                partition_by=PriceHistory.product_id,
                order_by=PriceHistory.started_at.desc()
            ).label('rn')
        )
        .where(
            or_(
                PriceHistory.ended_at.is_(None),
                PriceHistory.ended_at > datetime.now()
            )
        )
        .subquery()
    )

    # Filter to get only the most recent markdown
    current_markdown = (
        select(markdown_subquery)
        .where(markdown_subquery.c.rn == 1)
        .subquery()
    )

    # Main query
    query = (
        select(
            # Product Info
            Product.id,
            Product.sku,
            Product.name.label('product_name'),
            Product.category,
            Product.brand,
            Product.status,

            # Pricing
            Product.unit_cost,
            Product.base_price,
            Product.current_price,
            (Product.current_price - Product.unit_cost).label('current_margin'),
            func.round(
                cast(
                    ((Product.current_price - Product.unit_cost) / Product.current_price * 100),
                    Numeric
                ), 2
            ).label('margin_percentage'),

            # Inventory
            Inventory.stock_on_hand,
            (Inventory.stock_on_hand - func.coalesce(Inventory.reserved, 0)).label('available_stock'),
            Product.holding_cost_per_unit_per_day,

            # Sales Metrics
            func.coalesce(sales_subquery.c.total_units_sold_30d, 0).label('total_units_sold_30d'),
            func.coalesce(sales_subquery.c.avg_daily_units, 0).label('avg_daily_units'),
            func.coalesce(sales_subquery.c.units_last_15_days, 0).label('units_last_15_days'),
            func.coalesce(sales_subquery.c.units_prev_15_days, 0).label('units_prev_15_days'),

            # Calculated Metrics - Days of Inventory
            case(
                (func.coalesce(sales_subquery.c.avg_daily_units, 0) > 0,
                 func.round(
                     cast(Inventory.stock_on_hand / sales_subquery.c.avg_daily_units, Numeric),
                     1
                 )),
                else_=999
            ).label('days_of_inventory'),

            # Sales Trend Percentage
            case(
                (func.coalesce(sales_subquery.c.units_prev_15_days, 0) > 0,
                 func.round(
                     cast(
                         ((sales_subquery.c.units_last_15_days - sales_subquery.c.units_prev_15_days)
                          / cast(sales_subquery.c.units_prev_15_days, Float) * 100),
                         Numeric
                     ), 2
                 )),
                else_=None
            ).label('sales_trend_pct'),

            # Stock Turnover Ratio
            case(
                (and_(
                    Inventory.stock_on_hand > 0,
                    func.coalesce(sales_subquery.c.total_units_sold_30d, 0) > 0
                ),
                 func.round(
                     cast(
                         sales_subquery.c.total_units_sold_30d /
                         (cast(Inventory.stock_on_hand, Float) / 30),
                         Numeric
                     ), 2
                 )),
                else_=0
            ).label('stock_turnover_ratio'),

            # Markdown Info
            func.coalesce(current_markdown.c.markdown_pct, 0).label('current_markdown_pct'),
            current_markdown.c.markdown_price,

            # Clearance & Risk Flags
            Product.expiry_date,
            case(
                (and_(
                    Product.expiry_date.isnot(None),
                    Product.expiry_date <= current_date + timedelta(days=30)
                ), True),
                else_=False
            ).label('approaching_clearance'),

            case(
                (func.coalesce(sales_subquery.c.total_units_sold_30d, 0) == 0, True),
                else_=False
            ).label('zero_sales_flag'),

            case(
                (Inventory.stock_on_hand > func.coalesce(sales_subquery.c.avg_daily_units, 0) * 60, True),
                else_=False
            ).label('overstocked_flag'),

            # Elasticity (already incorporates competitor pricing)
            ElasticityEstimate.elasticity,
            ElasticityEstimate.confidence.label('elasticity_confidence'),

            # Max Discount Calculation
            func.least(
                func.round(
                    cast(
                        ((Product.current_price - Product.unit_cost * 1.1) / Product.current_price * 100),
                        Numeric
                    ), 2
                ),
                50
            ).label('max_discount_pct_suggested'),

            # Last Activity
            sales_subquery.c.last_sale_date,
            Product.created_at
        )
        .select_from(Product)
        .outerjoin(Inventory, Inventory.product_id == Product.id)
        .outerjoin(sales_subquery, sales_subquery.c.product_id == Product.id)
        .outerjoin(current_markdown, current_markdown.c.product_id == Product.id)
        .outerjoin(ElasticityEstimate, ElasticityEstimate.product_id == Product.id)
        .where(
            and_(
                Product.status == 'active',
                Inventory.stock_on_hand > 0
            )
        )
        .order_by(
            case(
                (and_(
                    Product.expiry_date.isnot(None),
                    Product.expiry_date <= current_date + timedelta(days=30)
                ), 1),
                (func.coalesce(sales_subquery.c.total_units_sold_30d, 0) == 0, 2),
                (Inventory.stock_on_hand > func.coalesce(sales_subquery.c.avg_daily_units, 0) * 60, 3),
                else_=4
            ),
            case(
                (func.coalesce(sales_subquery.c.avg_daily_units, 0) > 0,
                 func.round(
                     cast(Inventory.stock_on_hand / sales_subquery.c.avg_daily_units, Numeric),
                     1
                 )),
                else_=999
            ).desc()
        )
    )

    return session.exec(query).mappings().all()
