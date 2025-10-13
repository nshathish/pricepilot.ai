# Prompt template as a module-level constant
CLEARANCE_ANALYSIS_PROMPT = """
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
    
    Please provide:
    
    1. **FLASH SALE CANDIDATES**
       - Which products should be included?
       - Why are they strong candidates?
    
    2. **RANKED RECOMMENDATIONS**
       - Rank all products by flash sale priority
       - Include: product_id, sku, product_name, reason
    
    3. **DISCOUNT STRATEGY**
       - Suggested markdown % (≤ max_discount_pct_suggested)
       - Expected impact on sales velocity and profit
       - Tradeoff analysis
    
    4. **URGENCY ASSESSMENT**
       - Immediate vs delayed action
       - Risk analysis (clearance, overstock)
    
    5. **CATEGORY INSIGHTS**
       - Patterns, bundling opportunities
    
    6. **CAMPAIGN PLAN**
       - Duration, timing, expected profit uplift
       - Success metrics
    
    Return your analysis in structured markdown or bullet format. Be specific with numbers and reasoning.        

"""
