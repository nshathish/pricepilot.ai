import numpy as np
from typing import Any, Dict, List, Tuple


class MonteCarloEngine:
    """
    Monte Carlo simulation engine (with auto-calibration + daily capacity)

    What's new (and why your percentiles were flat before):
    - If demand >> stock, every sim sells out → identical revenue.
    - We add:
      1) traffic auto-calibration: quickly probes demand and scales it down
         so you DON'T sell out every time (unless config forces it).
      2) per-product daily capacity (default ~15% of stock/day) to avoid
         "instant sellout" and to create variance in time.
      3) Dirichlet product allocation + Poisson unit draw to avoid rounding traps.
    """

    def __init__(self, config: Dict[str, Any]):
        self.config = config.get("campaign_config", config)

        # Random generator
        seed = self.config.get("seed", None)
        self.rng = np.random.default_rng(seed)

        # Campaign pieces
        self.duration: int = int(self.config.get("duration_days", 14))
        self.products: List[Dict[str, Any]] = list(self.config.get("products", []))
        self.channels: Dict[str, Dict[str, Any]] = dict(self.config.get("channels", {}))
        self.day_multipliers: Dict[str, Dict[str, float]] = dict(self.config.get("day_multipliers", {}))

        # Base traffic scale (can be auto-tuned)
        self.base_traffic_scale: float = float(self.config.get("traffic_scale", 0.6))

        # Optional: auto-calibrate so we don't sell out every time
        self.auto_calibrate: bool = bool(self.config.get("auto_calibrate", True))
        self.calib_target_sellout_rate: float = float(
            self.config.get("calib_target_sellout_rate", 0.2))  # aim: ≤20% sims sell out all
        self.calib_trials: int = int(self.config.get("calib_trials", 60))
        self.calib_max_steps: int = int(self.config.get("calib_max_steps", 6))
        self.calib_scale_factor: float = float(
            self.config.get("calib_scale_factor", 0.5))  # multiply traffic by this if too hot

        # Daily capacity default: 15% of stock per day (can override per product)
        self.default_daily_capacity_frac: float = float(self.config.get("default_daily_capacity_frac", 0.15))

        # Dirichlet prior for product shares
        self.share_alpha = np.array(
            [float(p.get("share_alpha", 1.0)) for p in self.products], dtype=float
        )
        self.share_alpha = np.clip(self.share_alpha, 1e-3, None)

    # ------------------------- helpers -------------------------------------

    @staticmethod
    def _std_floor(mean: float, std: float, frac_floor: float, abs_floor: float) -> float:
        mean = float(mean)
        std = float(std)
        return max(std, max(abs(mean) * frac_floor, abs_floor))

    def _day_multiplier(self, day: int) -> float:
        dm = self.day_multipliers.get(str(day), {"mean": 1.0, "std": 0.1})
        dm_mean = float(dm.get("mean", 1.0))
        dm_std = self._std_floor(dm_mean, dm.get("std", 0.1), frac_floor=0.02, abs_floor=1e-3)
        return max(0.3, self.rng.normal(dm_mean, dm_std))

    def _channel_draw(self, cfg: Dict[str, Any]) -> Tuple[int, float]:
        # Reach
        reach_mean = float(cfg.get("reach_mean", 1000))
        reach_std = self._std_floor(reach_mean, cfg.get("reach_std", 100), frac_floor=0.05, abs_floor=1.0)
        reach = int(round(max(0.0, self.rng.normal(reach_mean, reach_std))))

        # Conversion
        conv_mean = float(cfg.get("conversion_rate_mean", 0.05))
        conv_std = self._std_floor(conv_mean, cfg.get("conversion_rate_std", 0.01), frac_floor=0.10, abs_floor=1e-4)
        conv_rate = float(np.clip(self.rng.normal(conv_mean, conv_std), 1e-4, 0.5))
        return reach, conv_rate

    def _simulate_once(self, traffic_scale: float, debug_first: bool = False) -> Tuple[float, Dict[str, int], bool]:
        """Run one full-campaign simulation with a given traffic scale."""
        sim_revenue = 0.0
        sim_units = {p["name"]: 0 for p in self.products}
        stock = {p["name"]: int(p["current_stock"]) for p in self.products}

        # Per-product daily capacity (replenished each day)
        base_capacity = {
            p["name"]: int(
                max(1, p.get("daily_capacity", round(self.default_daily_capacity_frac * int(p["current_stock"])))))
            for p in self.products
        }

        for day in range(1, self.duration + 1):
            day_mult = self._day_multiplier(day)
            shares = self.rng.dirichlet(self.share_alpha)  # product preference this day

            # Reset daily capacity counters
            capacity_left = dict(base_capacity)

            for ch_name, ch_cfg in self.channels.items():
                activation_days = ch_cfg.get("activation_days", [])
                if activation_days and day not in activation_days:
                    continue

                reach, conv_rate = self._channel_draw(ch_cfg)
                if reach <= 0:
                    continue

                base_conversions = self.rng.binomial(n=reach, p=conv_rate)
                total_conversions = float(base_conversions) * day_mult * traffic_scale
                if total_conversions < 0.1:
                    continue

                for idx, product in enumerate(self.products):
                    name = product["name"]
                    if stock[name] <= 0 or capacity_left[name] <= 0:
                        continue

                    product_conversions = total_conversions * float(shares[idx])

                    vmin = float(product.get("velocity_multiplier_min", 1.5))
                    vmax = float(product.get("velocity_multiplier_max", 2.5))
                    velocity_mult = self.rng.uniform(vmin, vmax)

                    days_remaining = int(product.get("urgency_deadline", self.duration)) - day
                    if 0 <= days_remaining <= 3:
                        urgency_boost = 1.0 + (3 - days_remaining) * 0.3
                    else:
                        urgency_boost = 1.0

                    expected_units = max(0.0, product_conversions * velocity_mult * urgency_boost)
                    draw_units = int(self.rng.poisson(expected_units))  # stochastic
                    actual_units = min(draw_units, stock[name], capacity_left[name])

                    if actual_units > 0:
                        sim_units[name] += actual_units
                        stock[name] -= actual_units
                        capacity_left[name] -= actual_units
                        unit_price = float(product.get("discounted_price", product.get("current_price", 0.0)))
                        sim_revenue += actual_units * unit_price

        sold_out_all = all(v == 0 for v in stock.values())
        if debug_first:
            print(f"Revenue=${sim_revenue:,.2f}, Units={sum(sim_units.values())}, SoldOutAll={sold_out_all}")
        return sim_revenue, sim_units, sold_out_all

    def _auto_calibrate_traffic(self) -> float:
        """Reduce traffic_scale until sell-outs are rare enough."""
        if not self.auto_calibrate:
            return self.base_traffic_scale

        scale = self.base_traffic_scale
        for step in range(self.calib_max_steps):
            sold_out = 0
            for _ in range(self.calib_trials):
                _, _, sold = self._simulate_once(scale)
                sold_out += int(sold)
            frac = sold_out / max(1, self.calib_trials)
            # print(f"[calib] step {step}: scale={scale:.4f}, soldout_frac={frac:.2f}")
            if frac <= self.calib_target_sellout_rate:
                return scale
            scale *= self.calib_scale_factor  # turn traffic down
        return scale  # best we could do

    # ------------------------- public API ----------------------------------

    def run_simulation(self) -> Dict[str, Any]:
        num_sims: int = int(self.config.get("num_simulations", 1000))
        target_revenue = float(self.config.get("target_revenue", 12500.0))

        # 1) auto-calibrate traffic to avoid guaranteed sell-outs
        traffic_scale = self._auto_calibrate_traffic()

        all_revenues: List[float] = []
        all_units_sold: Dict[str, List[int]] = {p["name"]: [] for p in self.products}
        sold_out_all_count = 0

        print("\n=== STARTING MONTE CARLO ===")
        print(f"Simulations: {num_sims}, Duration: {self.duration} days, Products: {len(self.products)}")
        print(f"Traffic scale (post-calibration): {traffic_scale:.4f}")

        for sim in range(num_sims):
            rev, units, sold_all = self._simulate_once(traffic_scale, debug_first=(sim < 3))
            all_revenues.append(rev)
            for k, v in units.items():
                all_units_sold[k].append(v)
            if sold_all:
                sold_out_all_count += 1

        revenues = np.array(all_revenues, dtype=float)

        print("\n=== SIMULATION RESULTS ===")
        print(f"Unique revenue values: {len(set(all_revenues))}/{num_sims}")
        print(f"Revenue range: ${revenues.min():,.2f} - ${revenues.max():,.2f}")
        print(f"Mean: ${revenues.mean():,.2f}")
        print(f"Std Dev: ${revenues.std():,.2f}")
        print(f"10th percentile: ${np.percentile(revenues, 10):,.2f}")
        print(f"50th percentile: ${np.percentile(revenues, 50):,.2f}")
        print(f"90th percentile: ${np.percentile(revenues, 90):,.2f}")
        print(f"Sold out all products in {sold_out_all_count}/{num_sims} sims")
        print("=========================\n")

        results = {
            "simulation_summary": {
                "num_simulations": int(num_sims),
                "target_revenue": target_revenue,
                "revenue_mean": float(revenues.mean()),
                "revenue_std": float(revenues.std()),
                "revenue_10th_percentile": float(np.percentile(revenues, 10)),
                "revenue_50th_percentile": float(np.percentile(revenues, 50)),
                "revenue_90th_percentile": float(np.percentile(revenues, 90)),
                "probability_of_success": float(np.mean(revenues >= target_revenue)),
                "sold_out_all_fraction": float(sold_out_all_count / num_sims),
                "traffic_scale_used": float(traffic_scale),
            },
            "product_analysis": {}
        }

        for p in self.products:
            name = p["name"]
            units = np.array(all_units_sold[name], dtype=float)
            target_units = float(p.get("target_sellthrough", p.get("current_stock", 0)))
            curr_stock = float(p.get("current_stock", 0))
            sellthrough_pct_mean = (units.mean() / curr_stock * 100.0) if curr_stock > 0 else 0.0
            results["product_analysis"][name] = {
                "current_stock": int(curr_stock),
                "target_units": int(target_units),
                "units_sold_mean": float(units.mean()),
                "units_sold_std": float(units.std()),
                "units_sold_10th": float(np.percentile(units, 10)),
                "units_sold_50th": float(np.percentile(units, 50)),
                "units_sold_90th": float(np.percentile(units, 90)),
                "probability_of_meeting_target": float(np.mean(units >= target_units)),
                "sellthrough_percentage_mean": float(sellthrough_pct_mean),
                "urgency_deadline": int(p.get("urgency_deadline", self.duration)),
            }

        return results
