from .enums import (
    ProductStatus,
    Seasonality,
    CampaignType,
    CampaignStatus,
    AuditAction,
    ChangeSource,
    ApprovalStatus,
    ElasticityMethod
)

from .product import Product
from .inventory import Inventory
from .price_history import PriceHistory
from .sales import SalesDaily
from .elasticity import ElasticityEstimate
from .competitor import Competitor
from .competitor_price import CompetitorPrice
from .channel import Channel
from .campaign import Campaign, CampaignChannel
from .markdown import MarkdownEvaluation, MarkdownActionLog, ActionOutcome
from .settings import Setting, AuditLog, PerformanceMetric

# ----------------------------------------------------------------------
# Rebuild models to resolve forward references (Pydantic v2+)
# ----------------------------------------------------------------------
Product.model_rebuild()
Inventory.model_rebuild()
PriceHistory.model_rebuild()
SalesDaily.model_rebuild()
ElasticityEstimate.model_rebuild()
Competitor.model_rebuild()
CompetitorPrice.model_rebuild()
Channel.model_rebuild()
Campaign.model_rebuild()
CampaignChannel.model_rebuild()
MarkdownEvaluation.model_rebuild()
MarkdownActionLog.model_rebuild()
ActionOutcome.model_rebuild()
Setting.model_rebuild()
AuditLog.model_rebuild()
PerformanceMetric.model_rebuild()

__all__ = [
    # Enums
    "ProductStatus",
    "Seasonality",
    "CampaignType",
    "CampaignStatus",
    "AuditAction",
    "ChangeSource",
    "ApprovalStatus",
    "ElasticityMethod",

    # Core Product & Inventory
    "Product",
    "Inventory",
    "PriceHistory",

    # Sales & Analytics
    "SalesDaily",
    "ElasticityEstimate",

    # Marketing & Campaigns
    "Channel",
    "Campaign",
    "CampaignChannel",

    # Competitor Analysis
    "Competitor",
    "CompetitorPrice",

    # AI Decision & Action
    "MarkdownEvaluation",
    "MarkdownActionLog",
    "ActionOutcome",

    # System & Audit
    "Setting",
    "AuditLog",
    "PerformanceMetric",
]
