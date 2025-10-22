"""
Monte Carlo Adapter - Robust bridge between AI Analysis and Monte Carlo Simulation

This module provides defensive programming and smart mapping between the AI clearance
analysis output and the Monte Carlo simulation configuration, handling format variations
and providing validation.
"""

import re
import logging

from typing import Dict, Any, List, Tuple, Optional
from dataclasses import dataclass

from app.schemas.responses.clearance_analysis_response import ClearanceAnalysisResponse

logger = logging.getLogger(__name__)


@dataclass
class MonteCarloConfig:
    """Validated Monte Carlo configuration with type safety."""
    campaign_config: Dict[str, Any]
    insights: Dict[str, Any]
    validation_warnings: List[str]


class MonteCarloAdapter:
    """
    Robust adapter for converting AI clearance analysis to Monte Carlo configuration.

    Features:
    - Smart field mapping with fallbacks
    - Channel name normalization
    - Velocity range parsing from text
    - Dynamic day multiplier generation
    - Comprehensive validation
    - Error recovery mechanisms
    """

    # Channel name mappings (AI output → Monte Carlo keys)
    CHANNEL_MAPPINGS = {
        "Email Marketing": "email",
        "email marketing": "email",
        "email": "email",
        "Instagram/Social Media": "social",
        "Social Media": "social",
        "Instagram": "social",
        "social": "social",
        "SMS/Push Notifications": "sms",
        "SMS": "sms",
        "Push Notifications": "sms",
        "sms": "sms",
        "Website Banners": "banner",
        "Website Banner": "banner",
        "Banner": "banner",
        "banner": "banner",
        "Retargeting Ads": "retargeting",
        "Retargeting": "retargeting",
        "Affiliate/Partner Network": "affiliate",
        "Affiliate": "affiliate",
        "Partner Network": "affiliate"
    }

    # Default channel configurations
    DEFAULT_CHANNELS = {
        "email": {"reach_mean": 5000, "reach_std": 500, "conversion_rate_mean": 0.15, "conversion_rate_std": 0.02,
                  "budget": 200},
        "social": {"reach_mean": 8000, "reach_std": 1000, "conversion_rate_mean": 0.08, "conversion_rate_std": 0.015,
                   "budget": 500},
        "sms": {"reach_mean": 3000, "reach_std": 300, "conversion_rate_mean": 0.25, "conversion_rate_std": 0.03,
                "budget": 150, "activation_days": [1, 6]},
        "banner": {"reach_mean": 15000, "reach_std": 2000, "conversion_rate_mean": 0.05, "conversion_rate_std": 0.01,
                   "budget": 300}
    }

    def __init__(self):
        self.warnings: List[str] = []

    def convert_analysis_to_config(self, clearance_analysis: ClearanceAnalysisResponse) -> MonteCarloConfig:
        """
        Convert AI clearance analysis to Monte Carlo configuration with validation.

        Args:
            clearance_analysis: AI analysis response

        Returns:
            MonteCarloConfig with validated configuration and warnings
        """
        self.warnings = []

        try:
            # Extract basic campaign info
            duration_days = clearance_analysis.campaign_plan.duration_days
            target_revenue = clearance_analysis.campaign_plan.expected_uplift

            # Convert products
            products = self._convert_products(clearance_analysis.products)

            # Convert channels
            channels = self._convert_channels(clearance_analysis.marketing_channels)

            # Generate day multipliers
            day_multipliers = self._generate_day_multipliers(
                duration_days,
                clearance_analysis.executive_summary.urgent_action_count
            )

            # Build configuration
            campaign_config = {
                "duration_days": duration_days,
                "target_revenue": target_revenue,
                "num_simulations": 1000,
                "products": products,
                "channels": channels,
                "day_multipliers": day_multipliers,
                "auto_calibrate": True,
                "traffic_scale": 0.6
            }

            # Generate insights
            insights = self._generate_insights(clearance_analysis)

            # Validate configuration
            self._validate_config(campaign_config)

            return MonteCarloConfig(
                campaign_config=campaign_config,
                insights=insights,
                validation_warnings=self.warnings.copy()
            )

        except Exception as e:
            logger.error(f"Error converting analysis to Monte Carlo config: {e}")
            raise ValueError(f"Failed to convert analysis to Monte Carlo config: {str(e)}")

    def _convert_products(self, ai_products: List[Any]) -> List[Dict[str, Any]]:
        """Convert AI product analysis to Monte Carlo product configuration."""
        products = []

        for product in ai_products:
            try:
                # Extract velocity multiplier range
                velocity_min, velocity_max = self._parse_velocity_range(
                    product.recommended_action.expected_velocity_boost
                )

                # Calculate target sellthrough
                target_sellthrough = min(
                    product.recommended_action.target_units_sold,
                    product.stock_units  # Can't sell more than available
                )

                # Map urgency
                priority = "URGENT" if product.urgency_level == "URGENT" else "MODERATE"

                product_config = {
                    "name": product.name,
                    "sku": product.sku,
                    "product_id": product.product_id,
                    "current_stock": product.stock_units,
                    "target_sellthrough": target_sellthrough,
                    "urgency_deadline": product.days_until_clearance,
                    "original_price": product.current_price,
                    "discounted_price": product.recommended_action.new_price,
                    "discount_percentage": product.recommended_action.discount_percentage,
                    "baseline_velocity": product.sales_rate,
                    "velocity_multiplier_min": velocity_min,
                    "velocity_multiplier_max": velocity_max,
                    "priority": priority,
                    "share_alpha": 1.5 if priority == "URGENT" else 1.0  # Higher preference for urgent items
                }

                products.append(product_config)

            except Exception as e:
                self.warnings.append(f"Error processing product {product.name}: {str(e)}")
                continue

        if not products:
            raise ValueError("No products could be converted to Monte Carlo configuration")

        return products

    def _convert_channels(self, ai_channels: List[Any]) -> Dict[str, Dict[str, Any]]:
        """Convert AI marketing channels to Monte Carlo channel configuration."""
        channels = {}

        for channel in ai_channels:
            try:
                # Normalize channel name
                channel_key = self._normalize_channel_name(channel.channel)

                # Parse reach and conversion rates
                reach_mean, reach_std = self._parse_range(channel.reach, default_mean=5000)
                conv_mean, conv_std = self._parse_percentage(channel.conversion, default_mean=0.10)
                budget = self._parse_budget(channel.budget)

                # Handle activation days for SMS
                activation_days = []
                if channel_key == "sms":
                    activation_days = self._parse_activation_days(channel.timing)

                channel_config = {
                    "reach_mean": reach_mean,
                    "reach_std": reach_std,
                    "conversion_rate_mean": conv_mean,
                    "conversion_rate_std": conv_std,
                    "budget": budget
                }

                if activation_days:
                    channel_config["activation_days"] = activation_days

                channels[channel_key] = channel_config

            except Exception as e:
                self.warnings.append(f"Error processing channel {channel.channel}: {str(e)}")
                continue

        # Fill in missing channels with defaults
        for default_channel, default_config in self.DEFAULT_CHANNELS.items():
            if default_channel not in channels:
                channels[default_channel] = default_config.copy()
                self.warnings.append(f"Using default configuration for missing channel: {default_channel}")

        return channels

    def _generate_day_multipliers(self, duration_days: int, urgent_count: int) -> Dict[str, Dict[str, float]]:
        """Generate dynamic day multipliers based on campaign characteristics."""
        day_multipliers = {}

        # Determine campaign profile
        if urgent_count > 0 and duration_days <= 7:
            # Urgent short campaign: front-loaded
            profile = "urgent_short"
        elif urgent_count > 0:
            # Urgent longer campaign: high start, sustain, finale
            profile = "urgent_long"
        else:
            # Standard campaign: build, sustain, push
            profile = "standard"

        for day in range(1, duration_days + 1):
            if profile == "urgent_short":
                # Front-loaded: start high, decay quickly
                if day <= 2:
                    mean = 1.6 - (day - 1) * 0.2  # 1.6, 1.4
                else:
                    mean = 1.0 - (day - 3) * 0.1  # 1.0, 0.9, 0.8...

            elif profile == "urgent_long":
                # High start, maintain, finale surge
                if day <= 2:
                    mean = 1.5 - (day - 1) * 0.1  # 1.5, 1.4
                elif day <= duration_days - 2:
                    mean = 1.0  # Sustain
                else:
                    mean = 1.2 + (day - (duration_days - 1)) * 0.3  # Finale surge

            else:  # standard
                # Build, sustain, push pattern
                if day <= 3:
                    mean = 0.8 + day * 0.1  # 0.9, 1.0, 1.1
                elif day <= duration_days - 3:
                    mean = 1.0  # Sustain
                else:
                    # Final push
                    days_from_end = duration_days - day
                    mean = 1.0 + (3 - days_from_end) * 0.2  # 1.2, 1.4, 1.6

            # Ensure reasonable bounds
            mean = max(0.7, min(1.8, mean))
            std = max(0.08, mean * 0.12)  # Std proportional to mean

            day_multipliers[str(day)] = {"mean": round(mean, 2), "std": round(std, 3)}

        return day_multipliers

    def _parse_velocity_range(self, velocity_text: str) -> Tuple[float, float]:
        """Parse velocity multiplier from AI text like '3-4x velocity boost'."""
        try:
            # Look for patterns like "3-4x", "2.5-3.5x", "3–4x" (em dash)
            pattern = r'(\d+(?:\.\d+)?)[^\d]*(\d+(?:\.\d+)?)x'
            match = re.search(pattern, velocity_text.replace('–', '-'))

            if match:
                vmin = float(match.group(1))
                vmax = float(match.group(2))
                return vmin, vmax

            # Fallback: look for single number like "3x"
            single_pattern = r'(\d+(?:\.\d+)?)x'
            single_match = re.search(single_pattern, velocity_text)
            if single_match:
                v = float(single_match.group(1))
                return v * 0.8, v * 1.2  # ±20% range

            # Default fallback
            self.warnings.append(f"Could not parse velocity from '{velocity_text}', using default 1.5-2.5x")
            return 1.5, 2.5

        except Exception as e:
            self.warnings.append(f"Error parsing velocity '{velocity_text}': {str(e)}")
            return 1.5, 2.5

    def _parse_range(self, range_text: str, default_mean: int = 5000) -> Tuple[int, int]:
        """Parse ranges like '5-8K', '1000-1500', '5K-8K'."""
        try:
            # Clean the text
            text = range_text.replace(',', '').replace(' ', '').lower()

            # Handle K multiplier
            multiplier = 1
            if 'k' in text:
                multiplier = 1000
                text = text.replace('k', '')

            # Look for range pattern
            pattern = r'(\d+(?:\.\d+)?)[^\d]*(\d+(?:\.\d+)?)'
            match = re.search(pattern, text)

            if match:
                low = float(match.group(1)) * multiplier
                high = float(match.group(2)) * multiplier
                mean = int((low + high) / 2)
                std = int((high - low) / 6)  # ~99% within range
                return mean, max(std, mean // 20)  # At least 5% std

            # Single number
            single_pattern = r'(\d+(?:\.\d+)?)'
            single_match = re.search(single_pattern, text)
            if single_match:
                value = int(float(single_match.group(1)) * multiplier)
                return value, value // 10

            # Fallback
            self.warnings.append(f"Could not parse range '{range_text}', using default")
            return default_mean, default_mean // 10

        except Exception as e:
            self.warnings.append(f"Error parsing range '{range_text}': {str(e)}")
            return default_mean, default_mean // 10

    def _parse_percentage(self, percentage_text: str, default_mean: float = 0.10) -> Tuple[float, float]:
        """Parse percentage ranges like '15-25%', '8-12%'."""
        try:
            text = percentage_text.replace('%', '').replace(' ', '')

            # Range pattern
            pattern = r'(\d+(?:\.\d+)?)[^\d]*(\d+(?:\.\d+)?)'
            match = re.search(pattern, text)

            if match:
                low = float(match.group(1)) / 100
                high = float(match.group(2)) / 100
                mean = (low + high) / 2
                std = (high - low) / 6
                return mean, max(std, mean * 0.1)  # At least 10% relative std

            # Single percentage
            single_pattern = r'(\d+(?:\.\d+)?)'
            single_match = re.search(single_pattern, text)
            if single_match:
                value = float(single_match.group(1)) / 100
                return value, value * 0.15  # 15% relative std

            self.warnings.append(f"Could not parse percentage '{percentage_text}', using default")
            return default_mean, default_mean * 0.15

        except Exception as e:
            self.warnings.append(f"Error parsing percentage '{percentage_text}': {str(e)}")
            return default_mean, default_mean * 0.15

    def _parse_budget(self, budget_text: str) -> int:
        """Parse budget from text like 'Low cost', 'Medium - $500', '$200'."""
        try:
            # Look for explicit dollar amounts
            dollar_pattern = r'\$(\d+(?:,\d+)*)'
            match = re.search(dollar_pattern, budget_text.replace(' ', ''))
            if match:
                return int(match.group(1).replace(',', ''))

            # Keyword mapping
            text_lower = budget_text.lower()
            if 'low' in text_lower:
                return 200
            elif 'medium' in text_lower:
                return 500
            elif 'high' in text_lower:
                return 1000
            elif 'commission' in text_lower or 'variable' in text_lower:
                return 300  # Estimate for commission-based
            else:
                return 400  # Default

        except Exception:
            return 400  # Safe default

    def _parse_activation_days(self, timing_text: str) -> List[int]:
        """Parse activation days from timing text like 'Day 1 evening, Day 3 reminder'."""
        try:
            # Look for day numbers
            day_pattern = r'day[s]?\s*(\d+)'
            matches = re.findall(day_pattern, timing_text.lower())
            days = [int(match) for match in matches]

            if days:
                return sorted(set(days))  # Remove duplicates and sort

            # Default SMS pattern
            return [1, 6]

        except Exception:
            return [1, 6]  # Safe default

    def _normalize_channel_name(self, channel_name: str) -> str:
        """Normalize AI channel names to Monte Carlo channel keys."""
        # Direct lookup
        normalized = self.CHANNEL_MAPPINGS.get(channel_name.strip())
        if normalized:
            return normalized

        # Fuzzy matching
        channel_lower = channel_name.lower().strip()
        for ai_name, mc_key in self.CHANNEL_MAPPINGS.items():
            if ai_name.lower() in channel_lower or channel_lower in ai_name.lower():
                return mc_key

        # Keyword matching
        if any(word in channel_lower for word in ['email', 'mail']):
            return "email"
        elif any(word in channel_lower for word in ['social', 'instagram', 'facebook', 'twitter']):
            return "social"
        elif any(word in channel_lower for word in ['sms', 'text', 'push']):
            return "sms"
        elif any(word in channel_lower for word in ['banner', 'display', 'website']):
            return "banner"
        else:
            # Create custom channel key
            clean_name = re.sub(r'[^\w]', '_', channel_lower)[:15]
            self.warnings.append(f"Unknown channel '{channel_name}', mapped to '{clean_name}'")
            return clean_name

    def _generate_insights(self, clearance_analysis: ClearanceAnalysisResponse) -> Dict[str, Any]:
        """Generate insights for Monte Carlo configuration."""
        # Extract critical risks from urgent products
        critical_risks = []
        for product in clearance_analysis.products:
            if product.urgency_level == "URGENT" and product.recommended_action.risk_if_no_action:
                critical_risks.append(f"{product.name}: {product.recommended_action.risk_if_no_action}")

        # Generate recommendations
        recommendations = [
            f"Focus on {clearance_analysis.executive_summary.urgent_action_count} urgent products",
            f"Leverage {len(clearance_analysis.marketing_channels)} marketing channels",
            f"Monitor daily performance for {clearance_analysis.campaign_plan.duration_days}-day campaign"
        ]

        # Estimate success probability based on urgency and discount levels
        avg_discount = sum(p.recommended_action.discount_percentage for p in clearance_analysis.products) / len(
            clearance_analysis.products)
        urgency_ratio = clearance_analysis.executive_summary.urgent_action_count / len(clearance_analysis.products)

        # Simple heuristic for success probability
        base_prob = 0.7  # Base 70% success rate
        discount_factor = min(0.2, avg_discount / 100)  # Higher discounts help
        urgency_penalty = urgency_ratio * 0.15  # Urgency adds risk
        success_prob = base_prob + discount_factor - urgency_penalty

        return {
            "critical_risks": critical_risks[:3],  # Top 3 risks
            "recommendations": recommendations,
            "success_probability_estimate": round(max(0.3, min(0.95, success_prob)), 2)
        }

    def _validate_config(self, config: Dict[str, Any]) -> None:
        """Validate Monte Carlo configuration and add warnings for issues."""
        # Check products
        if not config.get("products"):
            raise ValueError("No products in configuration")

        # Check channels
        if not config.get("channels"):
            raise ValueError("No channels in configuration")

        # Validate product fields
        for product in config["products"]:
            if product["current_stock"] <= 0:
                self.warnings.append(f"Product {product['name']} has no stock")

            if product["velocity_multiplier_min"] >= product["velocity_multiplier_max"]:
                self.warnings.append(f"Invalid velocity range for {product['name']}")

            if product["discounted_price"] >= product["original_price"]:
                self.warnings.append(f"Discount price not less than original for {product['name']}")

        # Validate channels
        for ch_name, ch_config in config["channels"].items():
            if ch_config["reach_mean"] <= 0:
                self.warnings.append(f"Channel {ch_name} has zero or negative reach")

            if not (0 < ch_config["conversion_rate_mean"] < 1):
                self.warnings.append(f"Invalid conversion rate for channel {ch_name}")


# Convenience function for easy integration
def convert_clearance_to_monte_carlo(clearance_analysis: ClearanceAnalysisResponse) -> MonteCarloConfig:
    """
    Convert AI clearance analysis to Monte Carlo configuration.

    Args:
        clearance_analysis: AI analysis response

    Returns:
        MonteCarloConfig with validated configuration
    """
    adapter = MonteCarloAdapter()
    return adapter.convert_analysis_to_config(clearance_analysis)
