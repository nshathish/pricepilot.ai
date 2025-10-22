import numpy as np
import logging

from decimal import Decimal, ROUND_HALF_UP
from datetime import datetime, date, UTC
from sklearn.linear_model import LinearRegression, BayesianRidge
from sklearn.preprocessing import StandardScaler
from sqlmodel import Session, select, Sequence

from app.models import (
    SalesDaily,
    PriceHistory,
    CompetitorPrice,
    ElasticityEstimate,
    ElasticityMethod, Product, Inventory
)

logger = logging.getLogger(__name__)


def get_price_on_date(price_history: Sequence[PriceHistory], sale_date: date) -> Decimal | None:
    for ph in price_history:
        start = ph.started_at.date()
        end = ph.ended_at.date() if ph.ended_at else date.today()
        if start <= sale_date <= end:
            return ph.price

    logger.warning(f"No price found for date {sale_date}")
    return None


def validate_elasticity_data(prices: list[float], quantities: list[float]) -> bool:
    """Validate that we have sufficient and reasonable data for elasticity estimation."""
    if len(prices) < 10:
        logger.warning(f"Insufficient data points: {len(prices)} (minimum 10 required)")
        return False

    # Check for reasonable price variance
    price_std = np.std(prices).item()
    price_mean = np.mean(prices).item()
    if price_std / price_mean < 0.05:  # Less than 5% coefficient of variation
        logger.warning("Insufficient price variation for elasticity estimation")
        return False

    # Check for reasonable quantity variance
    qty_std = np.std(quantities).item()
    qty_mean = np.mean(quantities).item()
    if qty_std / qty_mean < 0.1:  # Less than 10% coefficient of variation
        logger.warning("Insufficient quantity variation for elasticity estimation")
        return False

    return True


def calculate_seasonality_factor(sale_date: date, seasonality: str = None) -> float:
    """
    Calculate seasonality factor based on date and product seasonality.
    Returns multiplier where 1.0 = neutral, >1.0 = high season, <1.0 = low season
    """
    month = sale_date.month

    # Base seasonal patterns
    if seasonality == "winter":
        season_map = {12: 1.4, 1: 1.3, 2: 1.2, 3: 0.8, 4: 0.7, 5: 0.6,
                      6: 0.6, 7: 0.6, 8: 0.7, 9: 0.8, 10: 1.0, 11: 1.2}
    elif seasonality == "summer":
        season_map = {12: 0.7, 1: 0.6, 2: 0.7, 3: 0.9, 4: 1.1, 5: 1.3,
                      6: 1.4, 7: 1.4, 8: 1.3, 9: 1.0, 10: 0.9, 11: 0.8}
    elif seasonality == "spring":
        season_map = {12: 0.8, 1: 0.7, 2: 0.8, 3: 1.2, 4: 1.4, 5: 1.3,
                      6: 1.0, 7: 0.9, 8: 0.8, 9: 0.9, 10: 1.0, 11: 0.9}
    elif seasonality == "fall":
        season_map = {12: 1.0, 1: 0.8, 2: 0.8, 3: 0.9, 4: 0.9, 5: 0.9,
                      6: 0.8, 7: 0.8, 8: 0.9, 9: 1.2, 10: 1.4, 11: 1.3}
    else:  # year_round or None
        season_map = {month: 1.0 for month in range(1, 13)}

    return season_map.get(month, 1.0)


def calculate_inventory_pressure(stock_level: int, holding_cost_per_day: float, price: float) -> float:
    """
    Calculate inventory pressure factor.
    Higher pressure = need to sell faster = more price sensitive
    """
    # Base pressure from stock level
    if stock_level > 1000:
        stock_pressure = 1.3  # High inventory = more pressure
    elif stock_level > 500:
        stock_pressure = 1.1  # Medium inventory = slight pressure
    elif stock_level < 50:
        stock_pressure = 0.8  # Low inventory = less pressure
    else:
        stock_pressure = 1.0  # Normal inventory

    # Holding cost pressure (as % of price per day)
    if price > 0:
        holding_cost_rate = holding_cost_per_day / price
        cost_pressure = 1.0 + (holding_cost_rate * 30)  # 30-day effect
    else:
        cost_pressure = 1.0

    return min(stock_pressure * cost_pressure, 2.5)  # Cap at 2.5x


def safe_decimal_conversion(value: float, precision: int = 4) -> Decimal:
    """Safely convert float to Decimal with specified precision."""
    return Decimal(str(round(value, precision))).quantize(
        Decimal('0.' + '0' * precision),
        rounding=ROUND_HALF_UP
    )


def estimate_elasticity_for_product(
        session: Session,
        product_id: int,
        method: ElasticityMethod = ElasticityMethod.log_log,
        include_promo: bool = True
) -> ElasticityEstimate | None:
    # Fetch sales data
    sales_query = select(SalesDaily).where(SalesDaily.product_id == product_id)
    if not include_promo:
        sales_query = sales_query.where(SalesDaily.promo_flag == False)

    sales = session.exec(sales_query).all()

    # Fetch price history and competitor prices
    price_history = session.exec(
        select(PriceHistory).where(PriceHistory.product_id == product_id)
    ).all()

    comp_prices = session.exec(
        select(CompetitorPrice).where(CompetitorPrice.product_id == product_id)
    ).all()

    # Fetch product and inventory data for enhanced features
    product = session.get(Product, product_id)
    inventory = session.exec(
        select(Inventory).where(Inventory.product_id == product_id)
    ).first()  # Get first/main inventory location

    # Create competitor price lookup
    comp_price_map = {cp.price_date: cp.price for cp in comp_prices}

    # Prepare data for regression with enhanced features
    prices, quantities, comp_deltas, seasonality_factors, inventory_pressures, holding_costs = [], [], [], [], [], []

    for sale in sales:
        price = get_price_on_date(price_history, sale.sale_date)
        comp_price = comp_price_map.get(sale.sale_date)

        # More robust data filtering
        if (price and
                price > 0 and
                sale.units_sold > 0 and
                sale.avg_unit_price > 0):  # Also check avg_unit_price

            prices.append(float(price))
            quantities.append(float(sale.units_sold))

            # Feature 1: Competitor price delta (our price - competitor price)
            delta = float(price - comp_price) if comp_price else 0.0
            comp_deltas.append(delta)

            # Feature 2: Seasonality factor
            seasonality_type = product.seasonality.value if product and product.seasonality else None
            seasonality = calculate_seasonality_factor(sale.sale_date, seasonality_type)
            seasonality_factors.append(seasonality)

            # Feature 3: Inventory pressure
            stock_level = inventory.stock_on_hand if inventory else 500  # Default moderate stock
            holding_cost_per_day = float(product.holding_cost_per_unit_per_day) if product else 0.0
            inventory_pressure = calculate_inventory_pressure(stock_level, holding_cost_per_day, float(price))
            inventory_pressures.append(inventory_pressure)

            # Feature 4: Holding cost rate (as % of product value)
            holding_cost_rate = holding_cost_per_day / float(price) if price > 0 else 0.0
            holding_costs.append(holding_cost_rate)

        else:
            logger.debug(f"Filtered out sale on {sale.sale_date}: price={price}, units={sale.units_sold}")

    # Validate data quality
    if not validate_elasticity_data(prices, quantities):
        return None

    # Prepare features for regression
    try:
        log_prices = np.log(prices)
        log_quantities = np.log(quantities)

        # Start with log price as primary feature
        X = log_prices.reshape(-1, 1)
        feature_names = ['log_price']

        # Add additional features if they have variance

        # Feature 1: Competitor price delta
        if comp_deltas and len(set(comp_deltas)) > 1:  # Has variance
            X = np.hstack([X, np.array(comp_deltas).reshape(-1, 1)])
            feature_names.append('comp_delta')

        # Feature 2: Seasonality factor
        if seasonality_factors and len(set(seasonality_factors)) > 1:
            X = np.hstack([X, np.array(seasonality_factors).reshape(-1, 1)])
            feature_names.append('seasonality')

        # Feature 3: Inventory pressure
        if inventory_pressures and len(set(inventory_pressures)) > 1:
            X = np.hstack([X, np.array(inventory_pressures).reshape(-1, 1)])
            feature_names.append('inventory_pressure')

        # Feature 4: Holding cost rate
        if holding_costs and len(set(holding_costs)) > 1:
            X = np.hstack([X, np.array(holding_costs).reshape(-1, 1)])
            feature_names.append('holding_cost_rate')

        logger.info(f"Product {product_id}: Using features: {feature_names}")

        # Estimate elasticity based on method
        if method == ElasticityMethod.log_log:
            model = LinearRegression()
            model.fit(X, log_quantities)

            # Price elasticity is the coefficient of log_price
            elasticity = safe_decimal_conversion(model.coef_[0])
            r_squared = model.score(X, log_quantities)
            confidence = safe_decimal_conversion(min(r_squared * 100, 100), 2)

        elif method == ElasticityMethod.bayesian:
            scaler = StandardScaler()
            X_scaled = scaler.fit_transform(X)

            model = BayesianRidge()
            model.fit(X_scaled, log_quantities)

            # Unscale the price coefficient properly
            price_elasticity = model.coef_[0] / scaler.scale_[0]
            elasticity = safe_decimal_conversion(price_elasticity)

            r_squared = model.score(X_scaled, log_quantities)
            confidence = safe_decimal_conversion(min(r_squared * 100, 100), 2)

        else:
            raise ValueError(f"Unsupported method: {method}")

        # Log results for debugging
        logger.info(f"Product {product_id}: elasticity={elasticity}, "
                    f"confidence={confidence}, method={method}, "
                    f"sample_size={len(prices)}, features={feature_names}")

        # Prepare feature coefficients for storage
        feature_coefficients = {}
        if method == ElasticityMethod.bayesian and len(model.coef_) == len(feature_names):
            for i, feature_name in enumerate(feature_names):
                coef_value = model.coef_[i] / scaler.scale_[i] if i < len(scaler.scale_) else model.coef_[i]
                feature_coefficients[feature_name] = float(coef_value)
        elif method == ElasticityMethod.log_log and len(model.coef_) == len(feature_names):
            for i, feature_name in enumerate(feature_names):
                feature_coefficients[feature_name] = float(model.coef_[i])

        return ElasticityEstimate(
            product_id=product_id,
            elasticity=elasticity,
            method=method.value,
            sample_size=len(prices),
            confidence=confidence,
            features_used=feature_names,
            feature_count=len(feature_names),
            model_r_squared=safe_decimal_conversion(r_squared, 4),
            feature_coefficients=feature_coefficients if feature_coefficients else None,
            last_updated=datetime.now(UTC)
        )

    except Exception as e:
        logger.error(f"Error estimating elasticity for product {product_id}: {e}")
        return None
