from fastapi import Security, Depends, HTTPException
from fastapi.security import APIKeyHeader

from app.core.config import get_settings

api_key_header = APIKeyHeader(name="X-API-KEY", auto_error=False)


async def get_api_key(
        api_key: str = Security(api_key_header),
        settings=Depends(get_settings)
):
    if api_key == settings.app_api_key:
        return api_key
    raise HTTPException(status_code=403, detail="Could not validate API key")
