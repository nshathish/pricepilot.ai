from enum import Enum

class ElasticityMethod(str, Enum):
    log_log = "log-log"
    bayesian = "bayesian"