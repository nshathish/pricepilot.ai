from app.schemas.responses.clearance_analysis_response import ClearanceAnalysisResponse


def generate_monte_carlo_prompt(clearance_analysis: ClearanceAnalysisResponse) -> str:
    # Build product sections
    product_sections = []

    for product in clearance_analysis.products:
        rec = product.recommended_action
        urgency_tag = f" ({product.urgency_level} - {product.days_until_clearance} days left)" if product.urgency_level == 'URGENT' else f" ({product.urgency_level})"

        risk_section = ""
        if rec.risk_if_no_action:
            risk_section = f"\n- **Risk**: {rec.risk_if_no_action}"

        product_section = f"""
        ### {product.name}{urgency_tag}
        - **SKU**: {product.sku} | **Stock**: {product.stock_units} units
        - **Current Price**: ${product.current_price:.2f} → **New Price**: ${rec.new_price:.2f} ({rec.discount_percentage}% off)
        - **Sales Rate**: {product.sales_rate} units/day | **Deadline**: {product.days_until_clearance} days{risk_section}
        - **Target**: {rec.target_units_sold}+ units | **Impact**: {rec.expected_velocity_boost}
        """
        product_sections.append(product_section)

    # Build channel sections (FIXED: moved outside product loop)
    channel_sections = []
    for i, channel in enumerate(clearance_analysis.marketing_channels, 1):
        products_list = ', '.join(channel.products)
        channel_section = f"{i}. **{channel.channel}**: Reach {channel.reach}, Conv {channel.conversion}, Budget {channel.budget}\n"
        channel_sections.append(channel_section)

    # Build final prompt (FIXED: only built once)
    prompt = f"""You are an expert data scientist. Generate a Monte Carlo simulation config for this campaign.

    ## CAMPAIGN: {clearance_analysis.campaign_plan.duration_days} days, ${clearance_analysis.campaign_plan.expected_uplift:,.0f} target, {clearance_analysis.executive_summary.urgent_action_count} urgent items

    ## PRODUCTS
    {''.join(product_sections)}

    ## CHANNELS
    {''.join(channel_sections)}

    ## REQUIREMENTS:
    1. Parse channel ranges: "5-8K" → mean=6500, std=750; "8-12%" → mean=0.10, std=0.01
    2. Extract velocity: "3-4x" → min=3.0, max=4.0; "2-3x" → min=2.0, max=3.0
    3. Set day multipliers: Days 1-2 high (1.4x), Days 7-10 dip (0.9x), Days 11-14 surge (1.3x)
    4. For SMS channels with "Day 1 & 6" timing, set: "activation_days": [1, 6]

    ## OUTPUT ONLY THIS JSON (no markdown, no explanations):

    {{
      "campaign_config": {{
        "duration_days": {clearance_analysis.campaign_plan.duration_days},
        "target_revenue": {clearance_analysis.campaign_plan.expected_uplift},
        "num_simulations": 1000,
        "products": [
          {{
            "name": "Product Name",
            "sku": "SKU-CODE",
            "product_id": 0,
            "current_stock": 0,
            "target_sellthrough": 0,
            "urgency_deadline": 0,
            "original_price": 0.0,
            "discounted_price": 0.0,
            "discount_percentage": 0,
            "baseline_velocity": 0.0,
            "velocity_multiplier_min": 0.0,
            "velocity_multiplier_max": 0.0,
            "priority": "URGENT|MODERATE"
          }}
        ],
        "channels": {{
          "email": {{"reach_mean": 0, "reach_std": 0, "conversion_rate_mean": 0.0, "conversion_rate_std": 0.0, "budget": 0}},
          "social": {{"reach_mean": 0, "reach_std": 0, "conversion_rate_mean": 0.0, "conversion_rate_std": 0.0, "budget": 0}},
          "sms": {{"reach_mean": 0, "reach_std": 0, "conversion_rate_mean": 0.0, "conversion_rate_std": 0.0, "budget": 0, "activation_days": [1, 6]}},
          "banner": {{"reach_mean": 0, "reach_std": 0, "conversion_rate_mean": 0.0, "conversion_rate_std": 0.0, "budget": 0}}
        }},
        "day_multipliers": {{
          "1": {{"mean": 1.4, "std": 0.15}}, "2": {{"mean": 1.3, "std": 0.12}},
          "3": {{"mean": 1.1, "std": 0.10}}, "4": {{"mean": 1.0, "std": 0.10}},
          "5": {{"mean": 1.0, "std": 0.10}}, "6": {{"mean": 1.5, "std": 0.18}},
          "7": {{"mean": 0.95, "std": 0.10}}, "8": {{"mean": 0.90, "std": 0.10}},
          "9": {{"mean": 0.90, "std": 0.10}}, "10": {{"mean": 0.92, "std": 0.10}},
          "11": {{"mean": 1.0, "std": 0.12}}, "12": {{"mean": 1.2, "std": 0.15}},
          "13": {{"mean": 1.4, "std": 0.18}}, "14": {{"mean": 1.6, "std": 0.20}}
        }}
      }},
      "insights": {{
        "critical_risks": ["Risk 1", "Risk 2"],
        "recommendations": ["Action 1", "Action 2"],
        "success_probability_estimate": 0.0
      }}
    }}"""

    return prompt
