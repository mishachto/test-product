import { Link } from 'react-router-dom'

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <Link to="/" className="text-sm text-indigo-600 hover:text-indigo-800">
        Logout
      </Link>
    </header>
  )
}
