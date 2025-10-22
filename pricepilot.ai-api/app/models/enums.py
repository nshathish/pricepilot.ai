from enum import Enum


class ProductStatus(str, Enum):
    active = "active"
    discontinued = "discontinued"


class Seasonality(str, Enum):
    spring = "spring"
    summer = "summer"
    fall = "fall"
    winter = "winter"
    year_round = "year_round"


class CampaignType(str, Enum):
    flash_sale = "flash_sale"  # Quick, urgent sales (24-48 hours)
    clearance = "clearance"  # Getting rid of old/slow inventory
    seasonal = "seasonal"  # Holiday, back-to-school, summer sales
    cross_promotion = "cross_promotion"  # Buy X get Y, bundle deals
    end_of_life = "end_of_life"  # Discontinuing products permanently


class CampaignStatus(str, Enum):
    draft = "draft"  # Campaign created but not launched yet
    active = "active"  # Currently running campaign
    paused = "paused"  # Temporarily stopped (can resume)
    completed = "completed"  # Successfully finished
    cancelled = "cancelled"  # Stopped permanently before completion


class AuditAction(str, Enum):
    INSERT = "INSERT"
    UPDATE = "UPDATE"
    DELETE = "DELETE"
    TRUNCATE = "TRUNCATE"


class ChangeSource(str, Enum):
    system = "system"
    ai_agent = "ai_agent"
    manual = "manual"
    api = "api"
    migration = "migration"
    scheduled_job = "scheduled_job"


class ApprovalStatus(str, Enum):
    pending = "pending"
    approved = "approved"
    auto_approved = "auto_approved"
    rejected = "rejected"


class ElasticityMethod(str, Enum):
    log_log = "log_log"
    bayesian = "bayesian"
    ols = "ols"  # ordinary least squares
    ridge = "ridge"  # ridge regression
