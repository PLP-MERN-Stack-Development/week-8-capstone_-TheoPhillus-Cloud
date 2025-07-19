// client/src/pages/AdminLogin.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../context/useAuth'

export default function AdminLogin() {
  const [email, setEmail] = useState('theo.motsoane@gmail.com')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await login({ email, password })
      navigate('/admin/dashboard')
    } catch (err) {
      setError(err.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
            Admin Portal
        </h2>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
            Sign in to manage your content
        </p>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded
                         focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-700 dark:text-gray-100"

            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded
                         focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-500 hover:bg-brand-700 text-white font-semibold py-2 rounded transition
                        focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}