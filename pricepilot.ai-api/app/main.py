from contextlib import asynccontextmanager

from fastapi import FastAPI, Depends

from app.core.config import Settings, get_settings
from app.db.sessions import init_db
from app.api.v1.endpoints import product


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup code here
    init_db()
    yield
    # Shutdown code here
    print("Shutting down...")


app = FastAPI(lifespan=lifespan)

app.include_router(product.router, prefix="/api/v1/products", tags=["products"])


@app.get("/")
def home(settings: Settings = Depends(get_settings)):
    return {f"message": f"Hello, {settings.app_name}!"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}
