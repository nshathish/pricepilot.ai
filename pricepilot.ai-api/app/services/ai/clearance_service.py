import json
import pandas as pd

from anthropic import AsyncAnthropic
from anthropic.types import MessageParam
from typing import Any, Sequence
from datetime import datetime

from app.prompts.clearance_master_template import FIND_CLEARANCE_AND_CAMPAIGN_PROMPT
from app.schemas.clearance_analysis_response import ClearanceAnalysisResponse, ExecutiveSummary, CampaignPlan, \
    SuccessMetrics
from app.schemas.clearance_products_response import (
    ClearanceProductsResponse,
    AnalysisSummary,
    Insights,
    CampaignRecommendation
)
from app.schemas.combined_analysis_response import CombinedAnalysisResponse


async def get_clearance_products_and_detailed_analysis(
        product_data: Sequence[Any],
        api_key: str
) -> CombinedAnalysisResponse:
    products_list = [dict(row) for row in product_data]

    df = pd.DataFrame(products_list)
    if df.empty:
        return CombinedAnalysisResponse(
            clearance_products=ClearanceProductsResponse(
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
            ),
            campaign_analysis=ClearanceAnalysisResponse(
                executive_summary=ExecutiveSummary(
                    urgent_action_count=0,
                    urgent_products=[],
                    moderate_priority_count=0,
                    moderate_products=[],
                    expected_profit_impact=0
                ),
                navigation_sections=[],
                products=[],
                campaign_plan=CampaignPlan(
                    duration_days=0,
                    expected_uplift=0,
                    total_discount=0,
                    phases=[]
                ),
                marketing_channels=[],
                success_metrics=SuccessMetrics(
                    inventory_reduction_target="N/A",
                    sales_velocity_increase="N/A",
                    margin_preservation="N/A",
                    customer_acquisition="N/A"
                )
            )
        )

    summary_columns = ['current_price', 'current_margin', 'margin_percentage', 'stock_on_hand',
                       'total_units_sold_30d', 'avg_daily_units', 'days_of_inventory']
    available_columns = [col for col in summary_columns if col in df.columns]

    if available_columns:
        summary_stats = df[available_columns].describe().to_string()
    else:
        summary_stats = "No statistical data available"

    current_date = datetime.now().strftime('%Y-%m-%d')
    analysis_date = datetime.now().isoformat()

    prompt = FIND_CLEARANCE_AND_CAMPAIGN_PROMPT.format(
        current_date=current_date,
        product_data=json.dumps(products_list, indent=2, default=str),
        summary_statistics=summary_stats,
        analysis_date=analysis_date,
        total_products=len(products_list)
    )

    try:
        client = AsyncAnthropic(api_key=api_key)

        messages: list[MessageParam] = [{"role": "user", "content": prompt}]
        message = await client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=7000,  # Higher token limit for detailed analysis
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

            analysis_result = CombinedAnalysisResponse.model_validate(parsed_json)

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
