# Prompt template as a module-level constant
CLEARANCE_ANALYSIS_PROMPT = """Analyze these products for clearance optimization. Current date: {current_date}

Products:
{product_data}

For each product, analyze:
1. Urgency level based on days_left and days_of_inventory
2. Optimal discount percentage to clear inventory while maximizing profit
3. Projected sell-through percentage after discount
4. Clear reasoning for the recommendation

Classify as:
- URGENT: Less than 10 days of inventory OR less than 7 days until deadline
- MODERATE: 10-30 days of inventory OR 7-20 days until deadline
- ON_TRACK: More than 30 days of inventory AND sufficient time to sell naturally

Rules:
- Never recommend discounts over 50%
- Higher urgency = more aggressive discounts
- Consider sales velocity when calculating optimal discount
- Fast-moving items need smaller discounts
- Slow-moving items need larger discounts

Respond with ONLY valid JSON in this exact format:
{{
  "analysisDate": "{analysis_date}",
  "totalProducts": {total_products},
  "clearanceCandidates": [
    {{
      "productId": "string",
      "productName": "string",
      "status": "URGENT|MODERATE|ON_TRACK",
      "currentMetrics": {{
        "stock": 0,
        "daysLeft": 0,
        "currentPrice": 0.00,
        "basePrice": 0.00,
        "salesRate": 0.0,
        "daysOfInventory": 0.0
      }},
      "recommendation": {{
        "discountPercent": 0,
        "newPrice": 0.00,
        "projectedSellThrough": "0%",
        "estimatedRevenue": 0.00,
        "reasoning": "Brief explanation"
      }}
    }}
  ],
  "summary": {{
    "urgent": 0,
    "moderate": 0,
    "onTrack": 0
  }}
}}

IMPORTANT: Your entire response must be valid JSON only. Do not include any explanatory text outside the JSON structure."""
