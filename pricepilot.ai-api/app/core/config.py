from functools import lru_cache

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str
    database_url: str
    anthropy_api_key: str
    app_api_key: str
    cors_origins: str
    cache_ttl_minutes: int = 30
    clearance_cache_key: str = "clearance_products"
    use_mock_data: bool = True

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings():
    return Settings()
