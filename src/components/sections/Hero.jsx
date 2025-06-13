import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { Sphere, Box, Torus, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei'
import { personalInfo } from '../../data/portfolioData'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

// Floating 3D Objects
const FloatingGeometry = ({ position, geometry, color, speed = 1 }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  const GeometryComponent = geometry === 'sphere' ? Sphere : geometry === 'box' ? Box : Torus

  return (
    <GeometryComponent
      ref={meshRef}
      position={position}
      args={geometry === 'torus' ? [1, 0.3, 16, 100] : [1, 1, 1]}
      scale={geometry === 'sphere' ? 0.8 : geometry === 'box' ? 0.6 : 0.5}
    >
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </GeometryComponent>
  )
}

const Scene3D = () => {
  const geometries = useMemo(() => [
    { position: [-4, 2, -2], geometry: 'sphere', color: '#22c55e', speed: 1.2 },
    { position: [4, -1, -3], geometry: 'box', color: '#3b82f6', speed: 0.8 },
    { position: [-2, -3, -1], geometry: 'torus', color: '#f59e0b', speed: 1.5 },
    { position: [3, 3, -4], geometry: 'sphere', color: '#ec4899', speed: 0.9 },
    { position: [0, -2, -5], geometry: 'box', color: '#8b5cf6', speed: 1.1 },
  ], [])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.3} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      {geometries.map((geo, index) => (
        <FloatingGeometry key={index} {...geo} />
      ))}
      
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="block text-white">Hello, I'm</span>
            <span className="block gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            {personalInfo.title}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="#contact"
              className="p-3 rounded-full glass-effect hover:neon-glow transition-all duration-300"
              aria-label="Contact me"
            >
              <Mail className="w-6 h-6 text-accent-400" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:neon-glow transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-accent-400" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:neon-glow transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-accent-400" />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToNext()}
              className="px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg"
            >
              View My Work
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 glass-effect text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={scrollToNext}
          className="p-2 rounded-full glass-effect hover:bg-white/20 transition-all duration-300"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-6 h-6 text-accent-400" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
