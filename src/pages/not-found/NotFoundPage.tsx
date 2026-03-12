import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-500">Page not found</p>
      <Link
        to="/"
        className="mt-4 rounded-md bg-indigo-600 px-6 py-2 text-white transition-colors hover:bg-indigo-700"
      >
        Go Home
      </Link>
    </div>
  )
}
