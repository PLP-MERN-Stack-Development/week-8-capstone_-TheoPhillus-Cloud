import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'

export default function AuthProvider({ children }) {
  // Try to load from localStorage
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('user')
    return raw ? JSON.parse(raw) : null
  })
  const [token, setToken] = useState(
    () => localStorage.getItem('token') || null
  )

  // Whenever token changes, set axios header & persist
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      localStorage.setItem('token', token)
    } else {
      delete axios.defaults.headers.common['Authorization']
      localStorage.removeItem('token')
    }
  }, [token])

  // Whenever user changes, persist or clear
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  // login() calls your API and sets user + token
  const login = async ({ email, password }) => {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      { email, password }
    )
    // Expect { user: {…}, token: "xxx" }
    const { user: u, token: t } = res.data
    setUser(u)
    setToken(t)
    return res.data
  }

  const logout = () => {
    setUser(null)
    setToken(null)
  }

  const isAuthenticated = Boolean(user)

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  )
}