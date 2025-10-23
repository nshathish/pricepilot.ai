import json
import time
from datetime import datetime
from pathlib import Path

from fastapi import APIRouter, HTTPException, Depends

from app.core.config import Settings, get_settings
from app.core.security import get_api_key
from app.schemas.responses.clearance_analysis_response import ClearanceAnalysisResponse
from app.services.ai.agent_run_service import generate_simulation_typescript
from app.services.ai.simulation_service import get_config_for_monte_carlo
from app.services.monte_carlo_engine import MonteCarloEngine

router = APIRouter(dependencies=[Depends(get_api_key)])


@router.post("/monte-carlo")
async def full_pipeline(
        clearance_analysis: ClearanceAnalysisResponse,
        settings: Settings = Depends(get_settings)
):
    if (settings.use_mock_data):
        mock_file = Path(__file__).parents[4] / "mocks" / "monte_carlo_simulation_mock.json"
        if not mock_file.exists():
            raise FileNotFoundError(f"Mock file not found at: {mock_file}")

        with open(mock_file, 'r') as f:
            mock_data = json.load(f)
        time.sleep(10)
        return mock_data

    try:
        monte_carlo_config = await get_config_for_monte_carlo(
            clearance_analysis,
            api_key=settings.anthropy_api_key
        )

        # Step 2: Run Monte Carlo simulation
        engine = MonteCarloEngine(monte_carlo_config)
        simulation_results = engine.run_simulation()

        # Step 3: Combine everything
        return {
            "success": True,
            "timestamp": datetime.now().isoformat(),
            "campaign_summary": {
                "products_count": len(clearance_analysis.products),
                "channels_count": len(clearance_analysis.marketing_channels),
                "duration_days": clearance_analysis.campaign_plan.duration_days,
                "target_revenue": clearance_analysis.campaign_plan.expected_uplift,
                "urgent_items": clearance_analysis.executive_summary.urgent_action_count
            },
            "ai_insights": {
                "critical_risks": monte_carlo_config.get("insights", {}).get("critical_risks", []),
                "recommendations": monte_carlo_config.get("insights", {}).get("recommendations", []),
                "success_probability_estimate": monte_carlo_config.get("insights", {}).get(
                    "success_probability_estimate", 0)
            },
            "monte_carlo_config": monte_carlo_config.get("campaign_config", {}),
            "simulation_results": simulation_results,
            "interpretation": {
                "overall_success_rate": f"{simulation_results['simulation_summary']['probability_of_success'] * 100:.1f}%",
                "expected_revenue": f"${simulation_results['simulation_summary']['revenue_50th_percentile']:,.0f}",
                "worst_case_10th": f"${simulation_results['simulation_summary']['revenue_10th_percentile']:,.0f}",
                "best_case_90th": f"${simulation_results['simulation_summary']['revenue_90th_percentile']:,.0f}",
                "revenue_range": f"${simulation_results['simulation_summary']['revenue_10th_percentile']:,.0f} - ${simulation_results['simulation_summary']['revenue_90th_percentile']:,.0f}"
            },
            "product_details": simulation_results["product_analysis"]
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Pipeline error: {str(e)}")


@router.post("/agent-run-plan")
async def agent_run_plan(
        clearance_analysis: ClearanceAnalysisResponse,
        settings: Settings = Depends(get_settings),
):
    if (settings.use_mock_data):
        mock_file = Path(__file__).parents[4] / "mocks" / "agent_plan_mock.json"
        if not mock_file.exists():
            raise FileNotFoundError(f"Mock file not found at: {mock_file}")

        with open(mock_file, 'r', encoding='utf-8') as f:  # Add encoding='utf-8'
            mock_data = json.load(f)
        time.sleep(10)
        return mock_data


    if len(clearance_analysis.products) == 0:
        raise HTTPException(
            status_code=400,
            detail="No products found in clearance analysis"
        )

    try:
        # Calculate basic summary metrics
        # total_products = len(clearance_analysis.products)
        # total_revenue_impact = clearance_analysis.executive_summary.expected_profit_impact
        # total_units = sum(p.stock_units for p in clearance_analysis.products)

        # Generate simulation data using AI
        ai_result = await generate_simulation_typescript(
            clearance_analysis,
            api_key=settings.anthropy_api_key
        )

        if not ai_result["success"]:
            raise HTTPException(
                status_code=500,
                detail=f"AI generation failed: {ai_result.get('error', 'Unknown error')}"
            )

        return {
            "initial_products": ai_result["initial_products"],
            "simulation_plan": ai_result["simulation_plan"],
            "total_days": ai_result["total_days"]
        }
    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid clearance analysis data or AI response: {str(e)}"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate agent simulation plan: {str(e)}"
        )
