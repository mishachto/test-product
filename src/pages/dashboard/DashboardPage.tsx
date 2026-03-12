import { DashboardHeader } from '@/pages/dashboard/components/DashboardHeader'

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="mx-auto max-w-4xl p-6">
        <h2 className="text-2xl font-semibold text-gray-700">Dashboard Content</h2>
      </main>
    </div>
  )
}
