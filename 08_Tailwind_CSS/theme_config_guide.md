# Tailwind CSS Theme & Styling Guide

## 1. `tailwind.config.js` Custom Color Palette
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f3ff',
          500: '#6366f1',
          600: '#4f46e5',
          900: '#1e1b4b',
        },
        surface: {
          dark: '#0b0f17',
          card: '#131b2e',
          border: '#1f2d4d',
        }
      },
    },
  },
  plugins: [],
};
```

## 2. Glassmorphism Card Template (JSX)
```tsx
export function GlassCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/10">
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="text-slate-300">{children}</div>
    </div>
  );
}
```
