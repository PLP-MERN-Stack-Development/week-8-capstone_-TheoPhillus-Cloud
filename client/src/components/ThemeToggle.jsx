import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext)
  return (
    <button
      onClick={toggle}
      className="p-2 rounded focus:outline-none focus:ring bg-gray-200 dark:bg-gray-700"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}