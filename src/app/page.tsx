// src/app/page.tsx
import ProgressBar from '@/components/ProgressBar'

export default function Page() {
  return (
    <main className="p-8 min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-4">StudyPlay — Dashboard (dev)</h1>
      <div className="max-w-md">
        <div className="mb-2 text-sm text-gray-600">Points progress</div>
        <ProgressBar value={270} max={1000} />
      </div>
    </main>
  )
}
