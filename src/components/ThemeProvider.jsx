import React, { createContext, useContext, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <motion.div
        animate={{
          backgroundColor: isDark 
            ? 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)'
        }}
        transition={{ duration: 0.5 }}
        className={`min-h-screen transition-all duration-500 ${
          isDark ? 'dark' : ''
        }`}
      >
        {children}
      </motion.div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
