from typing import Literal

from pydantic import BaseModel, Field


class AIRecommendation(BaseModel):
    """AI-generated recommendation for a product"""
    action: Literal["discount", "no_action"] = Field(
        description="Recommended action: apply discount or no action needed"
    )
    discount_percentage: float = Field(
        ge=0, le=100,
        description="Recommended discount percentage (0-100)"
    )
    new_price: float = Field(
        description="Calculated price after discount"
    )
    reasoning: str = Field(
        description="Explanation for the recommendation"
    )


class ClearanceCandidate(BaseModel):
    """Product identified as a clearance candidate"""
    product_id: int = Field(description="Unique product identifier")
    sku: str = Field(description="Product SKU")
    product_name: str = Field(description="Product name")
    category: str = Field(description="Product category")
    status: Literal["URGENT", "MODERATE", "ON TRACK"] = Field(
        description="Urgency status of the product"
    )
    stock: int = Field(ge=0, description="Current stock quantity")
    days_left: int = Field(description="Days until clearance deadline")
    current_price: float = Field(description="Current selling price")
    base_price: float = Field(description="Original base price")
    sales_rate: float = Field(description="Average daily sales rate")
    projected_sell_percentage: float = Field(
        ge=0,
        description="Projected sell-through percentage (0-100)"
    )
    ai_recommendation: AIRecommendation = Field(
        description="AI-generated discount recommendation"
    )
    urgency_score: int = Field(
        ge=1, le=100,
        description="Urgency score (1-100, higher is more urgent)"
    )
    risk_factors: list[str] = Field(
        default_factory=list,
        description="List of risk factors identified"
    )


class CampaignRecommendation(BaseModel):
    """Campaign recommendations from AI"""
    duration_days: int = Field(
        ge=0,
        description="Recommended campaign duration in days"
    )
    expected_profit_uplift: float = Field(
        description="Expected profit increase from campaign"
    )
    success_metrics: list[str] = Field(
        default_factory=list,
        description="Key metrics to track for campaign success"
    )


class Insights(BaseModel):
    """Analysis insights and recommendations"""
    top_priorities: list[int] = Field(
        default_factory=list,
        description="Product IDs that need immediate attention"
    )
    category_analysis: str = Field(
        description="Analysis of category-level patterns"
    )
    campaign_recommendation: CampaignRecommendation = Field(
        description="Overall campaign strategy recommendations"
    )


class AnalysisSummary(BaseModel):
    """Summary statistics of the analysis"""
    total_products_analyzed: int = Field(
        ge=0,
        description="Total number of products analyzed"
    )
    products_requiring_action: int = Field(
        ge=0,
        description="Number of products that need discounting"
    )
    total_potential_revenue_impact: float = Field(
        description="Total potential revenue impact of recommendations"
    )
    analysis_timestamp: str = Field(
        description="ISO timestamp of when analysis was performed"
    )


class ClearanceProductsResponse(BaseModel):
    """Complete clearance analysis response from AI"""
    summary: AnalysisSummary = Field(
        description="Summary of the analysis"
    )
    clearance_candidates: list[ClearanceCandidate] = Field(
        default_factory=list,
        description="List of products identified as clearance candidates"
    )
    insights: Insights = Field(
        description="Strategic insights and recommendations"
    )

    class Config:
        json_schema_extra = {
            "example": {
                "summary": {
                    "total_products_analyzed": 4,
                    "products_requiring_action": 3,
                    "total_potential_revenue_impact": 15000.00,
                    "analysis_timestamp": "2025-10-13T10:30:00"
                },
                "clearance_candidates": [
                    {
                        "product_id": 1,
                        "sku": "ELEC-2024-001",
                        "product_name": "Wireless Headphones Pro",
                        "category": "Electronics",
                        "status": "URGENT",
                        "stock": 200,
                        "days_left": 5,
                        "current_price": 89.99,
                        "base_price": 129.99,
                        "sales_rate": 2.1,
                        "projected_sell_percentage": 10.5,
                        "ai_recommendation": {
                            "action": "discount",
                            "discount_percentage": 40,
                            "new_price": 53.99,
                            "reasoning": "Only 5 days left with high inventory"
                        },
                        "urgency_score": 95,
                        "risk_factors": ["approaching_clearance", "low_sell_through"]
                    }
                ],
                "insights": {
                    "top_priorities": [1, 4],
                    "category_analysis": "Electronics showing slowest movement",
                    "campaign_recommendation": {
                        "duration_days": 7,
                        "expected_profit_uplift": 12000.00,
                        "success_metrics": ["sell_through_rate", "revenue_per_day"]
                    }
                }
            }
        }
