# Fullstack Integration Checklist & Code Patterns

## 1. Axios API Client Instance (`apiClient.ts`)
```typescript
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request Interceptor (Inject JWT)
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor (Global Error Handling)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login or refresh token
      console.warn('Unauthorized request - redirecting to auth');
    }
    return Promise.reject(error);
  }
);
```

## 2. React Hook with Loading & Error States
```typescript
import { useState, useEffect } from 'react';
import { apiClient } from './apiClient';

export function usePredictSalary() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const predict = async (payload: { years_of_experience: number; primary_skill: string }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiClient.post('/predict', payload);
      setData(res.data);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Prediction failed');
    } finally {
      setLoading(false);
    }
  };

  return { predict, loading, error, data };
}
```

## 3. Error Boundary Pattern
```tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props { children: ReactNode; fallback?: ReactNode; }
interface State { hasError: boolean; error?: Error; }

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught Error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 bg-red-950/40 border border-red-500/30 rounded-xl text-red-200">
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
```
