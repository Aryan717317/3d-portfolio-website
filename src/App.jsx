import React, { Suspense, lazy, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import ThemeProvider from './components/ThemeProvider'

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/sections/Hero'))
const About = lazy(() => import('./components/sections/About'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <div className="App">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100 text-white"
            >
              <Navbar />
              <main>
                <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Contact />
                </Suspense>
              </main>
              <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}

export default App