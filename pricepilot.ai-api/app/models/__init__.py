from .product import Product
from .inventory import Inventory
from .price_history import PriceHistory
from .sales_daily import SalesDaily
from .elasticity_estimate import ElasticityEstimate
from .competitor import Competitor
from .competitor_price import CompetitorPrice
from .markdown_evaluation import MarkdownEvaluation
from .markdown_action_log import MarkdownActionLog
from .action_outcome import ActionOutcome

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
MarkdownEvaluation.model_rebuild()
MarkdownActionLog.model_rebuild()
ActionOutcome.model_rebuild()
