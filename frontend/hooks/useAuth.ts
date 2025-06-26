'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient, type User, type AuthResponse } from '@/lib/api'
import { useState, useEffect } from 'react'

export function useAuth() {
  const [token, setToken] = useState<string | null>(null)
  const queryClient = useQueryClient()

  // Load token from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('auth_token')
    if (savedToken) {
      setToken(savedToken)
      apiClient.setToken(savedToken)
    }
  }, [])

  // Save token to localStorage and API client
  const saveToken = (newToken: string) => {
    setToken(newToken)
    localStorage.setItem('auth_token', newToken)
    apiClient.setToken(newToken)
  }

  // Remove token from localStorage and API client
  const removeToken = () => {
    setToken(null)
    localStorage.removeItem('auth_token')
    apiClient.setToken('')
  }

  // Get current user
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user'],
    queryFn: apiClient.getMe,
    enabled: !!token,
    retry: false,
  })

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: ({ email, password, name }: { email: string; password: string; name?: string }) =>
      apiClient.register(email, password, name),
    onSuccess: (data: AuthResponse) => {
      saveToken(data.access_token)
      queryClient.setQueryData(['user'], data.user)
    },
  })

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      apiClient.login(email, password),
    onSuccess: (data: AuthResponse) => {
      saveToken(data.access_token)
      queryClient.setQueryData(['user'], data.user)
    },
  })

  // Logout function
  const logout = () => {
    removeToken()
    queryClient.clear()
  }

  return {
    user,
    token,
    isLoadingUser,
    isAuthenticated: !!token && !!user,
    register: registerMutation.mutate,
    login: loginMutation.mutate,
    logout,
    isRegistering: registerMutation.isPending,
    isLoggingIn: loginMutation.isPending,
    registerError: registerMutation.error,
    loginError: loginMutation.error,
  }
} 