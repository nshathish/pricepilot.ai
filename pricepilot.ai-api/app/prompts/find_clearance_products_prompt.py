# Prompt template as a module-level constant
FIND_CLEARANCE_PRODUCTS_PROMPT = """
    You are a retail markdown optimization agent.

    Current Date: {current_date}
    Analysis Timestamp: {analysis_date}
    
    Your task is to identify products that would benefit most from a flash sale campaign to maximize profit and reduce overstock.
    
    Dataset contains {total_products} products. Each product includes metrics on pricing, inventory, sales performance, markdown history, and risk flags.
    
    PRODUCT DATA (JSON):
    {product_data}
    
    SUMMARY STATISTICS:
    {summary_statistics}
    
    KEY METRICS:
    - Pricing: current_price, base_price, unit_cost, current_margin, margin_percentage
    - Inventory: stock_on_hand, available_stock, days_of_inventory
    - Sales: total_units_sold_30d, avg_daily_units, stock_turnover_ratio
    - Trend: units_last_15_days vs units_prev_15_days, sales_trend_pct
    - Markdown: current_markdown_pct
    - Risk: approaching_clearance, zero_sales_flag, overstocked_flag
    - Discount headroom: max_discount_pct_suggested
    
    Analyze each product and return a JSON response with the following structure:
          
    {{
      "summary": {{
        "total_products_analyzed": <number>,
        "products_requiring_action": <number>,
        "total_potential_revenue_impact": <number>,
        "analysis_timestamp": "{analysis_date}"
      }},
      "clearance_candidates": [
        {{
          "product_id": <number>,
          "sku": "<string>",
          "product_name": "<string>",
          "category": "<string>",
          "status": "URGENT" | "MODERATE" | "ON TRACK",
          "stock": <number>,
          "days_left": <number>,
          "current_price": <number>,
          "base_price": <number>,
          "sales_rate": <number>,
          "projected_sell_percentage": <number>,
          "ai_recommendation": {{
            "action": "discount" | "no_action",
            "discount_percentage": <number>,
            "new_price": <number>,
            "reasoning": "<string>"
          }},
          "urgency_score": <number 1-100>,
          "risk_factors": [<list of risk factor strings>]
        }}
      ],
      "insights": {{
        "top_priorities": [<list of product_ids that need immediate attention>],
        "category_analysis": "<string with category insights>",
        "campaign_recommendation": {{
          "duration_days": <number>,
          "expected_profit_uplift": <number>,
          "success_metrics": [<list of metrics to track>]
        }}
      }}
    }}
    
    CRITICAL INSTRUCTIONS:
    1. Status must be one of: "URGENT" (5-10 days left), "MODERATE" (11-30 days left), or "ON TRACK" (>30 days or selling well)
    2. For products with "ON TRACK" status, set discount_percentage to 0 and action to "no_action"
    3. projected_sell_percentage should be 0-100 (e.g., 57 means 57% likelihood of selling out)
    4. discount_percentage should never exceed max_discount_pct_suggested for that product
    5. Calculate new_price as: current_price * (1 - discount_percentage/100)
    6. urgency_score should be 1-100, with 100 being most urgent
    7. Include ALL products from the input data in clearance_candidates array
    8. risk_factors should include relevant flags like "approaching_clearance", "zero_sales_flag", "overstocked_flag", "slow_moving", etc.
    9. Respond ONLY with valid JSON. Do not include markdown code blocks or any text outside the JSON structure.
    10. Ensure all numeric values are numbers, not strings.
"""
