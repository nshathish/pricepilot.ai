import numpy as np

from typing import Any


class MonteCarloEngine:
    """Monte Carlo simulation engine using Claude-generated config"""

    def __init__(self, config: dict[str, Any]):
        self.config = config.get("campaign_config", config)

    def run_simulation(self) -> dict[str, Any]:
        """Run Monte Carlo simulation with the provided configuration"""

        num_sims = self.config.get("num_simulations", 1000)
        duration = self.config.get("duration_days", 14)
        products = self.config.get("products", [])
        channels = self.config.get("channels", {})
        day_multipliers = self.config.get("day_multipliers", {})

        all_revenues = []
        all_units_sold = {p["name"]: [] for p in products}

        # Run Monte Carlo simulations
        for sim_num in range(num_sims):
            sim_revenue = 0
            sim_units = {p["name"]: 0 for p in products}
            product_stock = {p["name"]: p["current_stock"] for p in products}

            for day in range(1, duration + 1):
                # Get day multiplier
                day_mult_data = day_multipliers.get(str(day), {"mean": 1.0, "std": 0.1})
                day_multiplier = max(0.5, np.random.normal(day_mult_data["mean"], day_mult_data["std"]))

                # Simulate each channel
                for channel_name, channel_config in channels.items():
                    # Check if channel is active this day (for SMS)
                    activation_days = channel_config.get("activation_days", [])
                    if activation_days and day not in activation_days:
                        continue

                    # Generate reach for this channel
                    reach = max(0, int(np.random.normal(
                        channel_config.get("reach_mean", 1000),
                        channel_config.get("reach_std", 100)
                    )))

                    # Generate conversion rate
                    conv_rate = np.clip(np.random.normal(
                        channel_config.get("conversion_rate_mean", 0.05),
                        channel_config.get("conversion_rate_std", 0.01)
                    ), 0, 1)

                    # Calculate conversions
                    conversions = np.random.binomial(reach, conv_rate * day_multiplier)

                    # Distribute conversions across products
                    for product in products:
                        if product_stock[product["name"]] <= 0:
                            continue

                        # Calculate product share (simple equal distribution)
                        product_share = 1.0 / len(products)
                        product_conversions = int(conversions * product_share)

                        # Apply velocity multiplier
                        velocity_mult = np.random.uniform(
                            product.get("velocity_multiplier_min", 1.5),
                            product.get("velocity_multiplier_max", 2.5)
                        )

                        # Calculate actual units sold
                        actual_units = int(product_conversions * velocity_mult)
                        actual_units = min(actual_units, product_stock[product["name"]])

                        # Update tracking
                        sim_units[product["name"]] += actual_units
                        product_stock[product["name"]] -= actual_units
                        sim_revenue += actual_units * product["discounted_price"]

            # Store simulation results
            all_revenues.append(sim_revenue)
            for pname, units in sim_units.items():
                all_units_sold[pname].append(units)

        # Calculate statistics
        revenues = np.array(all_revenues)
        target_revenue = self.config.get("target_revenue", 12500)

        results = {
            "simulation_summary": {
                "num_simulations": num_sims,
                "target_revenue": target_revenue,
                "revenue_mean": float(np.mean(revenues)),
                "revenue_std": float(np.std(revenues)),
                "revenue_10th_percentile": float(np.percentile(revenues, 10)),
                "revenue_50th_percentile": float(np.percentile(revenues, 50)),
                "revenue_90th_percentile": float(np.percentile(revenues, 90)),
                "probability_of_success": float(np.mean(revenues >= target_revenue))
            },
            "product_analysis": {}
        }

        # Calculate per-product statistics
        for product in products:
            pname = product["name"]
            units = np.array(all_units_sold[pname])
            target = product.get("target_sellthrough", product["current_stock"])

            results["product_analysis"][pname] = {
                "current_stock": product["current_stock"],
                "target_units": target,
                "units_sold_mean": float(np.mean(units)),
                "units_sold_std": float(np.std(units)),
                "units_sold_10th": float(np.percentile(units, 10)),
                "units_sold_50th": float(np.percentile(units, 50)),
                "units_sold_90th": float(np.percentile(units, 90)),
                "probability_of_meeting_target": float(np.mean(units >= target)),
                "sellthrough_percentage_mean": float(np.mean(units) / product["current_stock"] * 100),
                "urgency_deadline": product.get("urgency_deadline", duration)
            }

        return results
