# Production Deployment Guide

## 1. Vercel Frontend Deployment
1. Import repository into Vercel Dashboard.
2. Select Framework Preset: `Vite` or `Next.js`.
3. Configure Environment Variables:
   - `NEXT_PUBLIC_API_URL=https://api-job-simulator.onrender.com/api/v1`
4. Set Build Command: `npm run build` and Output Directory: `dist` or `.next`.

## 2. Render / Railway FastAPI Backend Deployment
1. Create new Web Service on Render / Railway connected to repo subfolder `/backend`.
2. Environment: `Python 3`.
3. Build Command: `pip install -r requirements.txt`.
4. Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`.
5. Environment Variables:
   - `DATABASE_URL=mysql://user:pass@host:3306/ai_job_simulator`
   - `SECRET_KEY=your-jwt-secret-key`

## 3. Managed MySQL Setup (PlanetScale / Render / RDS)
1. Provision MySQL 8.0 instance.
2. Execute `schema_design.sql` DDL migrations.
3. Configure IP whitelist or enable SSL connection string requirements.
