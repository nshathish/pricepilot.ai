from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str
    database_url: str
    anthropy_api_key: str
    app_api_key: str
    cors_origins: list[str] = Field(default_factory=list)

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings():
    return Settings()
