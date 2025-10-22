import logging
from typing import Any
from datetime import datetime, timedelta

from sqlmodel import Session, select, func, case, and_, or_

from app.models import Product, Inventory, SalesDaily, PriceHistory, ElasticityEstimate
from app.schemas.dataclasses.product_metrics import ProductMetrics

logger = logging.getLogger(__name__)


class ProductAnalysisService:
    """
    Service for gathering and analyzing product data for AI recommendations.

    This service breaks down complex analytics into focused, testable methods.
    """

    def __init__(self, logger_instance: logging.Logger = None):
        """Initialize the service with optional custom logger."""
        self.logger = logger_instance or logger

    def get_products_for_ai_analysis(
            self,
            session: Session,
            days_lookback: int = 30,
            min_stock_threshold: int = 0
    ) -> list[ProductMetrics]:
        """
        Get comprehensive product data for AI analysis.

        This method replaces the complex SQL query with a cleaner approach
        that fetches data in logical steps and combines them.

        Args:
            session: Database session
            days_lookback: How many days to look back for sales data
            min_stock_threshold: Minimum stock level to include products

        Returns:
            List of ProductMetrics objects ready for AI analysis
        """
        try:
            # Step 1: Get active products with inventory
            products = self._get_active_products_with_inventory(session, min_stock_threshold)

            if not products:
                self.logger.warning("No active products with inventory found")
                return []

            product_ids = [p.id for p in products]

            # Step 2: Get sales metrics for all products
            sales_metrics = self._get_sales_metrics(session, product_ids, days_lookback)

            # Step 3: Get current markdown information
            markdown_info = self._get_current_markdowns(session, product_ids)

            # Step 4: Get elasticity estimates
            elasticity_data = self._get_elasticity_estimates(session, product_ids)

            # Step 5: Combine all data into ProductMetrics objects
            return self._build_product_metrics(
                products, sales_metrics, markdown_info, elasticity_data, days_lookback
            )

        except Exception as e:
            self.logger.error(f"Error gathering product analysis data: {e}")
            return []

    def _get_active_products_with_inventory(
            self,
            session: Session,
            min_stock_threshold: int
    ) -> list[tuple]:
        """Get active products that have inventory."""
        query = (
            select(
                Product.id,
                Product.sku,
                Product.name,
                Product.category,
                Product.brand,
                Product.status,
                Product.unit_cost,
                Product.base_price,
                Product.current_price,
                Product.holding_cost_per_unit_per_day,
                Product.expiry_date,
                Product.created_at,
                Inventory.stock_on_hand,
                Inventory.reserved,
            )
            .join(Inventory, Inventory.product_id == Product.id)
            .where(
                and_(
                    Product.status == 'active',
                    Inventory.stock_on_hand > min_stock_threshold
                )
            )
        )

        return session.exec(query).all()

    def _get_sales_metrics(
            self,
            session: Session,
            product_ids: list[int],
            days_lookback: int
    ) -> dict[int, dict[str, Any]]:
        """Get sales metrics for the specified products."""
        current_date = datetime.now().date()
        lookback_date = current_date - timedelta(days=days_lookback)
        half_period = days_lookback // 2
        mid_date = current_date - timedelta(days=half_period)

        # Single query to get all sales metrics
        query = (
            select(
                SalesDaily.product_id,
                func.count(func.distinct(SalesDaily.sale_date)).label('days_with_sales'),
                func.sum(SalesDaily.units_sold).label('total_units_sold'),
                func.avg(SalesDaily.units_sold).label('avg_daily_units'),
                func.max(SalesDaily.sale_date).label('last_sale_date'),
                # Recent period (last half of lookback period)
                func.sum(
                    case(
                        (SalesDaily.sale_date >= mid_date, SalesDaily.units_sold),
                        else_=0
                    )
                ).label('units_recent_period'),
                # Earlier period (first half of lookback period)
                func.sum(
                    case(
                        (and_(
                            SalesDaily.sale_date >= lookback_date,
                            SalesDaily.sale_date < mid_date
                        ), SalesDaily.units_sold),
                        else_=0
                    )
                ).label('units_earlier_period'),
            )
            .where(
                and_(
                    SalesDaily.product_id.in_(product_ids),
                    SalesDaily.sale_date >= lookback_date
                )
            )
            .group_by(SalesDaily.product_id)
        )

        results = session.exec(query).all()

        # Convert to dictionary for easy lookup
        sales_metrics = {}
        for row in results:
            sales_metrics[row.product_id] = {
                'days_with_sales': row.days_with_sales or 0,
                'total_units_sold': row.total_units_sold or 0,
                'avg_daily_units': float(row.avg_daily_units) if row.avg_daily_units else 0.0,
                'last_sale_date': row.last_sale_date,
                'units_recent_period': row.units_recent_period or 0,
                'units_earlier_period': row.units_earlier_period or 0,
            }

        return sales_metrics

    def _get_current_markdowns(
            self,
            session: Session,
            product_ids: list[int]
    ) -> dict[int, dict[str, Any]]:
        """Get current markdown information for products."""
        current_time = datetime.now()

        # Get the most recent price history entry for each product
        query = (
            select(
                PriceHistory.product_id,
                PriceHistory.markdown_pct,
                PriceHistory.price,
                PriceHistory.started_at,
            )
            .where(
                and_(
                    PriceHistory.product_id.in_(product_ids),
                    or_(
                        PriceHistory.ended_at.is_(None),
                        PriceHistory.ended_at > current_time
                    )
                )
            )
            .order_by(PriceHistory.started_at.desc())
        )

        results = session.exec(query).all()

        # Get the most recent markdown for each product
        markdown_info = {}
        for row in results:
            if row.product_id not in markdown_info:  # Take the most recent one
                markdown_info[row.product_id] = {
                    'markdown_pct': float(row.markdown_pct) if row.markdown_pct else 0.0,
                    'markdown_price': row.price,
                    'started_at': row.started_at,
                }

        return markdown_info

    def _get_elasticity_estimates(
            self,
            session: Session,
            product_ids: list[int]
    ) -> dict[int, dict[str, Any]]:
        """Get elasticity estimates for products."""
        query = (
            select(
                ElasticityEstimate.product_id,
                ElasticityEstimate.elasticity,
                ElasticityEstimate.confidence,
                ElasticityEstimate.sample_size,
                ElasticityEstimate.last_updated,
            )
            .where(ElasticityEstimate.product_id.in_(product_ids))
        )

        results = session.exec(query).all()

        elasticity_data = {}
        for row in results:
            elasticity_data[row.product_id] = {
                'elasticity': row.elasticity,
                'confidence': row.confidence,
                'sample_size': row.sample_size,
                'last_updated': row.last_updated,
            }

        return elasticity_data

    def _build_product_metrics(
            self,
            products: list[tuple],
            sales_metrics: dict[int, dict[str, Any]],
            markdown_info: dict[int, dict[str, Any]],
            elasticity_data: dict[int, dict[str, Any]],
            days_lookback: int
    ) -> list[ProductMetrics]:
        """Combine all data sources into ProductMetrics objects."""
        current_date = datetime.now().date()
        product_metrics = []

        for product_row in products:
            try:
                product_id = product_row.id

                # Get sales data (with defaults)
                sales = sales_metrics.get(product_id, {})
                total_units_30d = sales.get('total_units_sold', 0)
                avg_daily_units = sales.get('avg_daily_units', 0.0)
                units_recent = sales.get('units_recent_period', 0)
                units_earlier = sales.get('units_earlier_period', 0)

                # Get markdown data
                markdown = markdown_info.get(product_id, {})

                # Get elasticity data
                elasticity = elasticity_data.get(product_id, {})

                # Calculate derived metrics - Convert Decimals to float for calculations
                available_stock = product_row.stock_on_hand - (product_row.reserved or 0)
                current_margin = product_row.current_price - product_row.unit_cost
                margin_percentage = float(
                    current_margin / product_row.current_price * 100) if product_row.current_price > 0 else 0.0

                # Days of inventory - ensure we're working with compatible types
                days_of_inventory = float(product_row.stock_on_hand) / avg_daily_units if avg_daily_units > 0 else 999.0

                # Sales trend percentage
                sales_trend_pct = None
                if units_earlier > 0:
                    sales_trend_pct = float((units_recent - units_earlier) / units_earlier * 100)

                # Stock turnover ratio - ensure float division
                stock_turnover_ratio = 0.0
                if product_row.stock_on_hand > 0 and total_units_30d > 0:
                    daily_avg_stock = float(product_row.stock_on_hand) / float(days_lookback)
                    stock_turnover_ratio = float(total_units_30d) / daily_avg_stock

                # Risk flags - convert Decimal to float for comparison
                approaching_clearance = (
                        product_row.expiry_date is not None and
                        product_row.expiry_date <= current_date + timedelta(days=30)
                )
                zero_sales_flag = total_units_30d == 0
                overstocked_flag = product_row.stock_on_hand > (avg_daily_units * 60) if avg_daily_units > 0 else False

                # Max discount calculation (maintain 10% margin) - handle Decimal arithmetic
                max_discount_pct = 0.0
                if product_row.current_price > 0:
                    # Convert to float for calculation
                    current_price_f = float(product_row.current_price)
                    unit_cost_f = float(product_row.unit_cost)
                    discount_amount = current_price_f - (unit_cost_f * 1.1)
                    max_discount_pct = min(
                        (discount_amount / current_price_f * 100),
                        50.0  # Cap at 50%
                    )

                product_metrics.append(ProductMetrics(
                    # Product Info
                    id=product_id,
                    sku=product_row.sku,
                    product_name=product_row.name,
                    category=product_row.category,
                    brand=product_row.brand,
                    status=product_row.status,

                    # Pricing
                    unit_cost=product_row.unit_cost,
                    base_price=product_row.base_price,
                    current_price=product_row.current_price,
                    current_margin=current_margin,
                    margin_percentage=margin_percentage,

                    # Inventory
                    stock_on_hand=product_row.stock_on_hand,
                    available_stock=available_stock,
                    holding_cost_per_unit_per_day=product_row.holding_cost_per_unit_per_day,

                    # Sales Metrics
                    total_units_sold_30d=total_units_30d,
                    avg_daily_units=avg_daily_units,
                    units_last_15_days=units_recent,
                    units_prev_15_days=units_earlier,
                    days_with_sales=sales.get('days_with_sales', 0),
                    last_sale_date=sales.get('last_sale_date'),

                    # Calculated Insights
                    days_of_inventory=days_of_inventory,
                    sales_trend_pct=sales_trend_pct,
                    stock_turnover_ratio=stock_turnover_ratio,

                    # Markdown Info
                    current_markdown_pct=markdown.get('markdown_pct', 0.0),
                    markdown_price=markdown.get('markdown_price'),

                    # Risk Flags
                    approaching_clearance=approaching_clearance,
                    zero_sales_flag=zero_sales_flag,
                    overstocked_flag=overstocked_flag,
                    expiry_date=product_row.expiry_date,

                    # Elasticity
                    elasticity=elasticity.get('elasticity'),
                    elasticity_confidence=elasticity.get('confidence'),

                    # Recommendations
                    max_discount_pct_suggested=max_discount_pct,
                ))

            except Exception as e:
                self.logger.error(f"Error processing product {product_row.id}: {e}")
                continue

        # Sort by priority (clearance approaching, zero sales, overstocked, then by days of inventory)
        product_metrics.sort(key=lambda x: (
            0 if x.approaching_clearance else 1,
            0 if x.zero_sales_flag else 1,
            0 if x.overstocked_flag else 1,
            -x.days_of_inventory  # Higher days of inventory = higher priority
        ))

        return product_metrics

    def convert_to_dict_list(self, product_metrics: list[ProductMetrics]) -> list[dict[str, Any]]:
        """Convert ProductMetrics objects to dictionary format for API responses."""
        return [
            {
                # Product Info
                'id': pm.id,
                'sku': pm.sku,
                'product_name': pm.product_name,
                'category': pm.category,
                'brand': pm.brand,
                'status': pm.status,

                # Pricing
                'unit_cost': float(pm.unit_cost),
                'base_price': float(pm.base_price),
                'current_price': float(pm.current_price),
                'current_margin': float(pm.current_margin),
                'margin_percentage': pm.margin_percentage,

                # Inventory
                'stock_on_hand': pm.stock_on_hand,
                'available_stock': pm.available_stock,
                'holding_cost_per_unit_per_day': float(pm.holding_cost_per_unit_per_day),

                # Sales Metrics
                'total_units_sold_30d': pm.total_units_sold_30d,
                'avg_daily_units': pm.avg_daily_units,
                'units_last_15_days': pm.units_last_15_days,
                'units_prev_15_days': pm.units_prev_15_days,
                'days_with_sales': pm.days_with_sales,
                'last_sale_date': pm.last_sale_date.isoformat() if pm.last_sale_date else None,

                # Calculated Insights
                'days_of_inventory': pm.days_of_inventory,
                'sales_trend_pct': pm.sales_trend_pct,
                'stock_turnover_ratio': pm.stock_turnover_ratio,

                # Markdown Info
                'current_markdown_pct': pm.current_markdown_pct,
                'markdown_price': float(pm.markdown_price) if pm.markdown_price else None,

                # Risk Flags
                'approaching_clearance': pm.approaching_clearance,
                'zero_sales_flag': pm.zero_sales_flag,
                'overstocked_flag': pm.overstocked_flag,
                'expiry_date': pm.expiry_date.isoformat() if pm.expiry_date else None,

                # Elasticity
                'elasticity': float(pm.elasticity) if pm.elasticity else None,
                'elasticity_confidence': float(pm.elasticity_confidence) if pm.elasticity_confidence else None,

                # Recommendations
                'max_discount_pct_suggested': pm.max_discount_pct_suggested,
            }
            for pm in product_metrics
        ]
