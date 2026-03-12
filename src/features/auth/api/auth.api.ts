import { httpClient } from '@/shared/api/http'

interface LoginPayload {
  email: string
  password: string
}

interface AuthResponse {
  token: string
  user: { id: string; email: string }
}

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  return httpClient.post<AuthResponse>('/auth/login', payload)
}

export async function logout(): Promise<void> {
  return httpClient.post('/auth/logout')
}
