from contextlib import asynccontextmanager

from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import Settings, get_settings
from app.db.sessions import init_db
from app.api.v1.endpoints import (
    elasticity_endpoints as elasticity,
    product_endpoints as product,
    clearance_endpoints as clearance,
    simulation_endpoints as simulation
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup code here
    init_db()
    yield
    # Shutdown code here
    print("Shutting down...")


app = FastAPI(lifespan=lifespan)

settings = get_settings()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.cors_origins],  # Accept requests from these origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

app.include_router(product.router, prefix="/api/v1/products", tags=["products"])
app.include_router(elasticity.router, prefix="/api/v1/elasticity", tags=["elasticity"])
app.include_router(clearance.router, prefix="/api/v1/clearance", tags=["clearance"])
app.include_router(simulation.router, prefix="/api/v1/simulation", tags=["simulation"])

@app.get("/")
def home(settings: Settings = Depends(get_settings)):
    return {f"message": f"Hello, {settings.app_name}!"}
