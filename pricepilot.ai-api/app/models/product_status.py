from enum import Enum


class ProductStatus(str, Enum):
    active = "active"
    discontinued = "discontinued"
