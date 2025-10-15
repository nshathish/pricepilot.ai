import json
import pandas as pd

from anthropic import AsyncAnthropic
from anthropic.types import MessageParam
from typing import Any, Sequence
from datetime import datetime

from app.prompts import (
    FIND_CLEARANCE_PRODUCTS_PROMPT,
    VIEW_CLEARANCE_DETAILED_ANALYSIS_PROMPT
)
from app.schemas.clearance_analysis_response import ClearanceAnalysisResponse
from app.schemas.clearance_products_response import (
    ClearanceProductsResponse,
    AnalysisSummary,
    Insights,
    CampaignRecommendation
)


async def find_clearance_products(
        product_data: Sequence[Any],
        api_key: str
) -> ClearanceProductsResponse:
    # Convert RowMapping objects to plain dictionaries
    products_list = [dict(row) for row in product_data]

    # Convert to DataFrame for statistics
    df = pd.DataFrame(products_list)

    # Handle empty dataset
    if df.empty:
        return ClearanceProductsResponse(
            summary=AnalysisSummary(
                total_products_analyzed=0,
                products_requiring_action=0,
                total_potential_revenue_impact=0,
                analysis_timestamp=datetime.now().isoformat()
            ),
            clearance_candidates=[],
            insights=Insights(
                top_priorities=[],
                category_analysis="No products available for analysis",
                campaign_recommendation=CampaignRecommendation(
                    duration_days=0,
                    expected_profit_uplift=0,
                    success_metrics=[]
                )
            )
        )

    # Prepare summary statistics
    summary_columns = ['current_price', 'current_margin', 'margin_percentage', 'stock_on_hand',
                       'total_units_sold_30d', 'avg_daily_units', 'days_of_inventory']

    # Filter to only include columns that exist in the dataframe
    available_columns = [col for col in summary_columns if col in df.columns]

    if available_columns:
        summary_stats = df[available_columns].describe().to_string()
    else:
        summary_stats = "No statistical data available"

    # Format the prompt with current data
    current_date = datetime.now().strftime('%Y-%m-%d')
    analysis_date = datetime.now().isoformat()

    prompt = FIND_CLEARANCE_PRODUCTS_PROMPT.format(
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
        print(f"Received response from Claude API (length: {len(response_text)} chars)")

        # Remove mark-down code blocks if present
        if response_text.startswith("```json"):
            response_text = response_text.replace("```json\n", "").replace("```json", "")
        if response_text.startswith("```"):
            response_text = response_text.replace("```\n", "").replace("```", "")
        # Remove trailing markdown
        if response_text.endswith("```"):
            response_text = response_text.replace("```", "").strip()

        response_text = response_text.strip()

        # Debug: Print first 500 characters
        print(f"Cleaned response preview: {response_text[:500]}...")

        # Parse and validate JSON response with Pydantic
        parsed_json = None  # Initialize to avoid reference before assignment

        try:
            # First try to parse as JSON to get better error messages
            parsed_json = json.loads(response_text)

            # Then validate with Pydantic
            analysis_result = ClearanceProductsResponse.model_validate(parsed_json)

            print(f"Successfully parsed and validated response: "
                  f"{analysis_result.summary.total_products_analyzed} products analyzed, "
                  f"{analysis_result.summary.products_requiring_action} require action")

            return analysis_result

        except json.JSONDecodeError as e:
            print(f"JSON Parse Error: {e}")
            print(f"Error at position: {e.pos}")
            print(f"Error line: {e.lineno}, column: {e.colno}")
            print(f"Response text around error: ...{response_text[max(0, e.pos - 50):e.pos + 50]}...")
            raise ValueError(
                f"Failed to parse AI response as JSON: {str(e)}. "
                f"Response may be malformed. Check logs for details."
            )
        except Exception as e:
            print(f"Validation Error: {e}")
            print(f"Response type: {type(parsed_json)}")
            if isinstance(parsed_json, dict):
                print(f"Response keys: {parsed_json.keys()}")
            raise ValueError(
                f"Response validation failed: {str(e)}. "
                f"AI response structure may not match expected schema."
            )
    except ValueError as e:
        # Re-raise ValueError (API key missing or parsing issues)
        raise
    except Exception as e:
        print(f"Unexpected error in analyze_clearance_products: {e}")
        raise Exception(f"Error analyzing clearance candidates: {str(e)}")


async def view_clearance_detailed_analysis(
        product_data: Sequence[Any],
        api_key: str
) -> ClearanceAnalysisResponse:
    products_list = [dict(row) for row in product_data]

    df = pd.DataFrame(products_list)
    if df.empty:
        return ClearanceAnalysisResponse()

    summary_columns = ['current_price', 'current_margin', 'margin_percentage', 'stock_on_hand',
                       'total_units_sold_30d', 'avg_daily_units', 'days_of_inventory']

    available_columns = [col for col in summary_columns if col in df.columns]

    if available_columns:
        summary_stats = df[available_columns].describe().to_string()
    else:
        summary_stats = "No statistical data available"

    prompt = VIEW_CLEARANCE_DETAILED_ANALYSIS_PROMPT.format(
        len_dataframe=len(products_list),
        product_data_json=json.dumps(products_list, indent=2, default=str),
        summary_statistics=summary_stats
    )

    try:
        client = AsyncAnthropic(api_key=api_key)

        messages: list[MessageParam] = [{"role": "user", "content": prompt}]
        message = await client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=8000,  # Higher token limit for detailed analysis
            messages=messages
        )

        response_text = message.content[0].text
        print(f"Received detailed analysis from Claude API (length: {len(response_text)} chars)")

        if response_text.startswith("```markdown"):
            response_text = response_text.replace("```markdown\n", "").replace("```markdown", "")
        if response_text.startswith("```"):
            response_text = response_text.replace("```\n", "").replace("```", "")
        if response_text.endswith("```"):
            response_text = response_text.replace("```", "").strip()

        response_text = response_text.strip()
        print(f"Cleaned markdown preview: {response_text}")

        parsed_json = None

        try:
            parsed_json = json.loads(response_text)

            analysis_result = ClearanceAnalysisResponse.model_validate(parsed_json)

            print("Successfully validated ClearanceAnalysisResponse")
            return analysis_result


        except json.JSONDecodeError as e:
            print(f"JSON Parse Error: {e}")
            print(f"Error at position: {e.pos}")
            print(f"Error line: {e.lineno}, column: {e.colno}")
            print(f"Response text around error: ...{response_text[max(0, e.pos - 50):e.pos + 50]}...")
            raise ValueError(
                f"Failed to parse AI response as JSON: {str(e)}. "
                f"Response may be malformed. Check logs for details."
            )
        except Exception as e:
            print(f"Validation Error: {e}")
            print(f"Response type: {type(parsed_json)}")
            if isinstance(parsed_json, dict):
                print(f"Response keys: {parsed_json.keys()}")
            raise ValueError(
                f"Response validation failed: {str(e)}. "
                f"AI response structure may not match expected schema."
            )
    except ValueError as e:
        # Re-raise ValueError (API key missing)
        raise
    except Exception as e:
        print(f"Unexpected error in view_clearance_detailed_analysis: {e}")
        raise Exception(f"Error generating detailed analysis: {str(e)}")
