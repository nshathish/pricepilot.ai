from typing import List, Optional
from pydantic import BaseModel, Field


class ExecutiveSummary(BaseModel):
    urgent_action_count: int
    urgent_products: List[str]
    moderate_priority_count: int
    moderate_products: List[str]
    expected_profit_impact: float


class RecommendedAction(BaseModel):
    discount_percentage: int
    new_price: float
    expected_velocity_boost: str
    target_units_sold: int
    rationale: str
    marketing_priority: str
    risk_if_no_action: Optional[str]


class Product(BaseModel):
    product_id: int
    sku: str
    name: str
    category: str
    current_price: float
    stock_units: int
    sales_rate: float
    natural_sellthrough: float
    days_until_clearance: int
    urgency_level: str
    recommended_action: RecommendedAction


class CampaignPhase(BaseModel):
    phase: int
    name: str
    products: List[str]
    duration: str


class CampaignPlan(BaseModel):
    duration_days: int
    expected_uplift: float
    total_discount: float
    phases: List[CampaignPhase]


class MarketingChannel(BaseModel):
    channel: str
    priority: str
    why: str
    reach: str
    conversion: str
    budget: str
    timing: str
    products: List[str]


class SuccessMetrics(BaseModel):
    inventory_reduction_target: str
    sales_velocity_increase: str
    margin_preservation: str
    customer_acquisition: str


class ClearanceAnalysisResponse(BaseModel):
    """Detailed markdown-based clearance analysis report from AI"""

    executive_summary: ExecutiveSummary = Field(
        description="High-level summary of the clearance analysis"
    )
    navigation_sections: List[str] = Field(
        default_factory=list,
        description="List of markdown section headers for navigation"
    )
    products: List[Product] = Field(
        default_factory=list,
        description="Detailed product-level analysis"
    )
    campaign_plan: CampaignPlan = Field(
        description="Recommended campaign strategy for clearance"
    )
    marketing_channels: List[MarketingChannel] = Field(
        default_factory=list,
        description="Suggested marketing channels for campaign execution"
    )
    success_metrics: SuccessMetrics = Field(
        description="Metrics to track campaign effectiveness"
    )

    class Config:
        json_schema_extra = {
            "example": {
                "executive_summary": {
                    "total_products": 4,
                    "products_flagged": 3,
                    "potential_revenue_gain": 15000.00,
                    "analysis_date": "2025-10-13T10:30:00"
                },
                "navigation_sections": [
                    "Executive Summary",
                    "Product Breakdown",
                    "Campaign Strategy",
                    "Marketing Channels",
                    "Success Metrics"
                ],
                "products": [
                    {
                        "product_id": 1,
                        "sku": "ELEC-2024-001",
                        "name": "Wireless Headphones Pro",
                        "category": "Electronics",
                        "status": "URGENT",
                        "stock": 200,
                        "days_left": 5,
                        "current_price": 89.99,
                        "base_price": 129.99,
                        "sales_rate": 2.1,
                        "projected_sell_through": 10.5,
                        "recommendation": {
                            "action": "discount",
                            "discount_percentage": 40,
                            "new_price": 53.99,
                            "reasoning": "Only 5 days left with high inventory"
                        },
                        "urgency_score": 95,
                        "risk_factors": ["approaching_clearance", "low_sell_through"]
                    }
                ],
                "campaign_plan": {
                    "duration_days": 7,
                    "expected_profit_uplift": 12000.00,
                    "tactics": ["flash_sale", "email_push", "homepage_banner"]
                },
                "marketing_channels": [
                    {
                        "channel": "Email",
                        "priority": "High",
                        "estimated_reach": 5000
                    },
                    {
                        "channel": "Social Media",
                        "priority": "Medium",
                        "estimated_reach": 12000
                    }
                ],
                "success_metrics": {
                    "metrics": ["sell_through_rate", "revenue_per_day", "conversion_rate"]
                }
            }
        }
