/**
 * 03_TypeScript - Starter Interfaces and Types
 */

// 1. Domain Entities
export interface User {
  id: string;
  email: string;
  role: 'ADMIN' | 'CANDIDATE' | 'RECRUITER';
  createdAt: Date;
}

export interface JobSimulation {
  id: number;
  dayNumber: number;
  title: string;
  promptScenario: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
}

// 2. Generic API Response Wrapper
export interface ApiResponse<T> {
  status: 'success' | 'error';
  data: T | null;
  message?: string;
  timestamp: string;
}

// 3. Machine Learning Inference Types
export interface SalaryPredictionRequest {
  yearsOfExperience: number;
  primarySkill: string;
  location: string;
  certificationsCount: number;
}

export interface SalaryPredictionResponse {
  predictedSalaryUsd: number;
  confidenceInterval: [number, number];
  modelVersion: string;
}

// 4. Utility Functions & Generics Example
export function createApiResponse<T>(data: T, status: 'success' | 'error' = 'success'): ApiResponse<T> {
  return {
    status,
    data,
    timestamp: new Date().toISOString()
  };
}

// Test instantiation
const samplePrediction: SalaryPredictionResponse = {
  predictedSalaryUsd: 145000,
  confidenceInterval: [135000, 155000],
  modelVersion: "v1.2.0"
};

const apiRes = createApiResponse<SalaryPredictionResponse>(samplePrediction);
console.log("Typed API Response:", apiRes);
