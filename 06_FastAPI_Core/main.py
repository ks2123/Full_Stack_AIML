"""
06_FastAPI_Core - Main FastAPI Application Starter
"""
from fastapi import FastAPI, APIRouter, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import time
from typing import Dict, Any

# 1. App Initialization & CORS
app = FastAPI(
    title="AI Job Simulator API",
    description="Core backend serving authentication, simulation data, and ML inference.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. Dependency Injection Mock
def get_ml_model():
    # Simulates loading or accessing cached ML model instance
    return {"model_name": "SalaryPredictor_v1", "loaded_at": time.time()}

# 3. Router Setup
api_router = APIRouter(prefix="/api/v1")

class PredictRequest(BaseModel):
    years_of_experience: float = Field(..., ge=0, le=40)
    primary_skill: str
    certifications_count: int = Field(0, ge=0)

class PredictResponse(BaseModel):
    status: str
    predicted_salary_usd: float
    confidence_interval: list[float]
    model_version: str

@api_router.get("/health", tags=["System"])
async def health_check() -> Dict[str, Any]:
    return {
        "status": "online",
        "service": "FastAPI Core",
        "timestamp": time.time()
    }

@api_router.post("/predict", response_model=PredictResponse, tags=["ML Inference"])
async def predict_salary(
    payload: PredictRequest,
    model: dict = Depends(get_ml_model)
):
    try:
        base = 70000.0
        calculated = base + (payload.years_of_experience * 12000.0) + (payload.certifications_count * 5000.0)
        return PredictResponse(
            status="success",
            predicted_salary_usd=calculated,
            confidence_interval=[calculated * 0.9, calculated * 1.1],
            model_version=model["model_name"]
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Inference error: {str(e)}"
        )

app.include_router(api_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
