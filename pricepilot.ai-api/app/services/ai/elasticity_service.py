import numpy as np
from decimal import Decimal
from datetime import datetime, date, UTC
from sklearn.linear_model import LinearRegression, BayesianRidge
from sklearn.preprocessing import StandardScaler
from sqlmodel import Session, select, Sequence

from app.models import (
    SalesDaily,
    PriceHistory,
    CompetitorPrice,
    ElasticityEstimate
)
from app.schemas.elasticity_method import ElasticityMethod


def get_price_on_date(price_history: Sequence[PriceHistory], sale_date: date) -> Decimal | None:
    for ph in price_history:
        start = ph.started_at.date()
        end = ph.ended_at.date() if ph.ended_at else date.max
        if start <= sale_date <= end:
            return ph.price
    return None


def estimate_elasticity_for_product(
        session: Session,
        product_id: int,
        method: ElasticityMethod = ElasticityMethod.log_log
) -> ElasticityEstimate | None:
    sales = session.exec(
        select(SalesDaily).where(SalesDaily.product_id == product_id)
    ).all()

    price_history = session.exec(
        select(PriceHistory).where(PriceHistory.product_id == product_id)
    ).all()

    comp_prices = session.exec(
        select(CompetitorPrice).where(CompetitorPrice.product_id == product_id)
    ).all()

    comp_price_map = {
        cp.price_date: cp.price for cp in comp_prices
    }

    prices, quantities, comp_deltas = [], [], []

    for s in sales:
        if s.promo_flag:
            continue  # skip promo days

        price = get_price_on_date(price_history, s.sale_date)
        comp_price = comp_price_map.get(s.sale_date)

        if price and s.units_sold > 0 and price > 0:
            prices.append(float(price))
            quantities.append(float(s.units_sold))
            delta = float(price - comp_price) if comp_price else 0.0
            comp_deltas.append(delta)
        else:
            print(f"No matching price for sale date {s.sale_date} (product {product_id})")

    if len(prices) < 5:
        print(f"Not enough data to estimate elasticity for product ID {product_id}, len={len(prices)}")
        return None

    # Multi-variate log-log regression
    log_price = np.log(prices).reshape(-1, 1)
    log_quantity = np.log(quantities)
    X = log_price

    if comp_deltas:
        X = np.hstack([X, np.array(comp_deltas).reshape(-1, 1)])

    if method == ElasticityMethod.log_log:
        print("Using Linear Regression for elasticity estimation")
        model = LinearRegression()
        model.fit(X, log_quantity)
        elasticity = round(Decimal(model.coef_[0]), 4)
        confidence = min(round(Decimal(model.score(X, log_quantity) * 100), 2), Decimal(100))

    elif method == ElasticityMethod.bayesian:
        print("Using Bayesian Ridge Regression for elasticity estimation")
        scaler = StandardScaler()
        X_scaled = scaler.fit_transform(X)
        model = BayesianRidge()
        model.fit(X_scaled, log_quantity)
        elasticity = round(Decimal(model.coef_[0] / scaler.scale_[0]), 4)
        confidence = min(round(Decimal(model.score(X_scaled, log_quantity) * 100), 2), Decimal(100))

    else:
        raise ValueError(f"Unsupported method: {method}")

    return ElasticityEstimate(
        product_id=product_id,
        elasticity=elasticity,
        method=method.value,
        sample_size=len(prices),
        confidence=confidence,
        last_updated=datetime.now(UTC)
    )
