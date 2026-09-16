"""
05_Python_Backend_Basics - API Basics & Data Validation
"""
import asyncio
from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, Field, field_validator


# 1. Pydantic v2 Models
class UserCreate(BaseModel):
    email: str = Field(..., pattern=r"^[\w\.-]+@[\w\.-]+\.\w+$", description="Valid email address")
    password: str = Field(..., min_length=8, description="Must be at least 8 characters")
    role: str = "CANDIDATE"

    @field_validator("role")
    @classmethod
    def validate_role(cls, v: str) -> str:
        allowed = ["ADMIN", "CANDIDATE"]
        if v.upper() not in allowed:
            raise ValueError(f"Role must be one of {allowed}")
        return v.upper()


class FeaturePayload(BaseModel):
    years_of_experience: float = Field(..., ge=0, le=50)
    primary_skill: str
    skills_list: List[str] = []
    location: str = "Remote"


class PredictionResult(BaseModel):
    predicted_salary: float
    confidence: float
    timestamp: datetime = Field(default_factory=datetime.utcnow)


# 2. Async Business Logic & Error Handling
class PredictionError(Exception):
    def __init__(self, message: str, code: int = 400):
        self.message = message
        self.code = code
        super().__init__(self.message)


async def run_ml_inference(payload: FeaturePayload) -> PredictionResult:
    """Simulates async model inference"""
    print(f"Running inference for payload: {payload.model_dump_json()}")
    await asyncio.sleep(0.2)  # Non-blocking async sleep

    if payload.years_of_experience < 0:
        raise PredictionError("Years of experience cannot be negative", code=422)

    base_salary = 60000.0
    exp_factor = payload.years_of_experience * 15000.0
    predicted = base_salary + exp_factor

    return PredictionResult(
        predicted_salary=round(predicted, 2),
        confidence=0.94
    )


async def main():
    try:
        user = UserCreate(email="engineer@example.com", password="securepassword123", role="candidate")
        print("Validated User:", user)

        payload = FeaturePayload(years_of_experience=3.5, primary_skill="FastAPI", skills_list=["Python", "SQL"])
        result = await run_ml_inference(payload)
        print("Inference Result:", result.model_dump_json(indent=2))
    except Exception as e:
        print("Error encountered:", e)

if __name__ == "__main__":
    asyncio.run(main())
