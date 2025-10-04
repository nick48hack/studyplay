// src/components/ProgressBar.tsx
export default function ProgressBar({ value = 40, max = 100 } : { value?: number, max?: number }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div className="h-4 rounded-full transition-all duration-300" style={{ width: `${pct}%`, background: 'linear-gradient(90deg,#7C3AED,#06B6D4)' }} />
    </div>
  );
}
