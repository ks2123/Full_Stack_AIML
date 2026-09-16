# React Core Cheatsheet

## 1. State Management (`useState`)
```tsx
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState<number>(0);

  // Always use functional updates for state dependent on previous value
  const increment = () => setCount((prev) => prev + 1);

  return <button onClick={increment}>Count: {count}</button>;
}
```

## 2. Props & Types
```tsx
interface UserBadgeProps {
  username: string;
  role: 'admin' | 'candidate' | 'interviewer';
  onSelect?: (username: string) => void;
}

export function UserBadge({ username, role, onSelect }: UserBadgeProps) {
  return (
    <div onClick={() => onSelect?.(username)} className="user-card">
      <h3>{username}</h3>
      <span>{role}</span>
    </div>
  );
}
```

## 3. Lifecycle & Cleanup (`useEffect`)
```tsx
import { useEffect, useState } from 'react';

export function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup on unmount or dependency change
    return () => clearInterval(timer);
  }, []);

  return <div>Active Session Time: {seconds}s</div>;
}
```

## 4. Custom Hooks (`useFetch`)
```tsx
import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => isMounted && setData(data))
      .catch((err) => isMounted && setError(err.message))
      .finally(() => isMounted && setLoading(false));

    return () => { isMounted = false; };
  }, [url]);

  return { data, loading, error };
}
```

## 5. Controlled Form Handling
```tsx
import { useState, FormEvent } from 'react';

export function JobSubmissionForm() {
  const [form, setForm] = useState({ candidateName: '', codeSnippet: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={form.candidateName}
        onChange={(e) => setForm({ ...form, candidateName: e.target.value })}
        placeholder="Candidate Name"
      />
      <textarea
        value={form.codeSnippet}
        onChange={(e) => setForm({ ...form, codeSnippet: e.target.value })}
        placeholder="Enter Solution Code"
      />
      <button type="submit">Submit Solution</button>
    </form>
  );
}
```
