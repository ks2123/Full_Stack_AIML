"""
15_Flagship_Project_AI_Job_Simulator - ML Engine Pipeline
"""
import os
import joblib
import numpy as np

class SalaryPredictionPipeline:
    def __init__(self, model_path: str = "model.joblib"):
        self.model_path = model_path
        self.model = None

    def load_or_train(self):
        """Simulate loading serialized model or fallback training"""
        if os.path.exists(self.model_path):
            self.model = joblib.load(self.model_path)
            print("Loaded serialized ML model.")
        else:
            print("Initializing mock ML pipeline...")

    def preprocess(self, years_of_exp: float, skills_count: int) -> np.ndarray:
        return np.array([[years_of_exp, skills_count]])

    def predict(self, years_of_exp: float, skills_count: int) -> float:
        features = self.preprocess(years_of_exp, skills_count)
        # Mock formula representing trained model inference
        predicted_salary = 65000 + (years_of_exp * 14000) + (skills_count * 3000)
        return float(predicted_salary)

if __name__ == "__main__":
    pipeline = SalaryPredictionPipeline()
    pipeline.load_or_train()
    est = pipeline.predict(years_of_exp=3.5, skills_count=5)
    print(f"Estimated Salary: ${est:,.2f}")
