import React from 'react'
import { ThemeContext } from './ThemeContext'
import { useThemeLogic } from './useThemeLogic'

export default function ThemeProvider({ children }) {
  const ctl = useThemeLogic()
  return (
    <ThemeContext.Provider value={ctl}>
      {children}
    </ThemeContext.Provider>
  )
}