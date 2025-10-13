import json
import pandas as pd

from anthropic import AsyncAnthropic
from typing import Dict, Any, Sequence, Coroutine
from datetime import datetime

from anthropic.types import MessageParam

from app.prompts import CLEARANCE_ANALYSIS_PROMPT


async def analyze_clearance_products(product_data: Sequence[Any], api_key: str) -> str:
    """
    Use Claude AI to analyze products and recommend clearance strategies
    """

    # Convert RowMapping objects to plain dictionaries
    products_list = [dict(row) for row in product_data]

    # Convert to DataFrame for statistics
    df = pd.DataFrame(products_list)

    # Prepare summary statistics
    summary_stats = df[['current_price', 'current_margin', 'margin_percentage', 'stock_on_hand',
                        'total_units_sold_30d', 'avg_daily_units', 'days_of_inventory']].describe().to_string()

    # Format the prompt with current data
    current_date = datetime.now().strftime('%Y-%m-%d')
    analysis_date = datetime.now().isoformat()

    prompt = CLEARANCE_ANALYSIS_PROMPT.format(
        current_date=current_date,
        product_data=json.dumps(products_list, indent=2, default=str),
        summary_statistics=summary_stats,
        analysis_date=analysis_date,
        total_products=len(products_list)
    )

    try:
        # Initialize Anthropic client
        client = AsyncAnthropic(api_key=api_key)

        # Call Claude API
        messages: list[MessageParam] = [{"role": "user", "content": prompt}]
        message = await client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=4000,
            messages=messages
        )

        # Extract the text response
        response_text = message.content[0].text

        # Clean up the response (remove potential mark down code blocks)
        response_text = response_text.strip()
        # response_text = response_text.replace('```json\n', '').replace('```\n', '').replace('```', '').strip()

        # Parse JSON response
        # analysis_result = json.loads(response_text)

        print("AI Response:", response_text)  # Debugging line

        return response_text

    except json.JSONDecodeError as e:
        raise ValueError(f"Failed to parse AI response as JSON: {str(e)}")
    except Exception as e:
        raise Exception(f"Error analyzing clearance candidates: {str(e)}")
