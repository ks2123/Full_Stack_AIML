# 15. Flagship Project: AI Job Simulator

A full-stack interactive platform simulating day-in-the-life technical challenges for AI/ML candidates with real-time feedback and dynamic salary estimation.

## 📐 System Architecture

```
[ Frontend (React + TS + R3F) ] ──(REST/JWT)──> [ FastAPI Server ]
                                                   │          │
                                         (SQL Queries)      (Inference)
                                                   ▼          ▼
                                             [ MySQL DB ]  [ ML Engine ]
```

## 🔄 Core User Flow
1. **Onboarding:** Candidate signs up, selects target role (ML Engineer / Full-Stack AI Dev).
2. **Daily Simulation:** User receives interactive coding/architecture scenario.
3. **Submission & Grading:** Code is evaluated via backend pipelines; immediate rubric feedback is generated.
4. **Salary Projection:** ML model infers estimated market salary based on cumulative performance metrics.

## 📁 Directory Sub-Structure
- `/frontend` - React + TS + Tailwind user interface
- `/backend` - FastAPI server & router endpoints
- `/ml_engine` - Model training, scaler persistence, and inference pipeline
