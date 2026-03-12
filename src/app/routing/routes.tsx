import { createBrowserRouter } from 'react-router-dom'
import { DashboardPage } from '@/pages/dashboard/DashboardPage'
import { NotFoundPage } from '@/pages/not-found/NotFoundPage'

export const router = createBrowserRouter([
  { path: '/', element: <DashboardPage /> },
  { path: '*', element: <NotFoundPage /> },
])
