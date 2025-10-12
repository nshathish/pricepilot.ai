import json
import os

from anthropic import AsyncAnthropic
from typing import Dict, Any, Sequence
from datetime import datetime

from app.prompts import CLEARANCE_ANALYSIS_PROMPT


async def analyze_clearance_products(products: Sequence[Any]) -> Dict[str, Any]:
    """
    Use Claude AI to analyze products and recommend clearance strategies
    """

    # Format products for analysis
    product_data = [
        {
            "id": str(p.id),
            "name": p.name,
            "sku": getattr(p, 'sku', 'N/A'),
            "category": getattr(p, 'category', 'N/A'),
            "stock": p.stock,
            "days_left": p.days_left,
            "current_price": float(p.current_price),
            "base_price": float(getattr(p, 'base_price', p.current_price)),
            "sales_rate": float(p.sales_rate),
            "days_of_inventory": round(p.stock / p.sales_rate, 1) if p.sales_rate > 0 else 999
        }
        for p in products
    ]

    # Format the prompt with current data
    current_date = datetime.now().strftime('%Y-%m-%d')
    analysis_date = datetime.now().isoformat()

    prompt = CLEARANCE_ANALYSIS_PROMPT.format(
        current_date=current_date,
        product_data=json.dumps(product_data, indent=2),
        analysis_date=analysis_date,
        total_products=len(product_data)
    )

    try:
        # Initialize Anthropic client
        client = AsyncAnthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

        # Call Claude API
        message = await client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=4000,
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        # Extract the text response
        response_text = message.content[0].text

        # Clean up the response (remove potential mark down code blocks)
        response_text = response_text.strip()
        response_text = response_text.replace('```json\n', '').replace('```\n', '').replace('```', '').strip()

        # Parse JSON response
        analysis_result = json.loads(response_text)

        return analysis_result

    except json.JSONDecodeError as e:
        raise ValueError(f"Failed to parse AI response as JSON: {str(e)}")
    except Exception as e:
        raise Exception(f"Error analyzing clearance candidates: {str(e)}")
