import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Box, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { personalInfo } from '../../data/portfolioData'
import { MapPin, Calendar, Coffee, Code } from 'lucide-react'

const FloatingCube = ({ position, color, speed = 1 }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
    }
  })

  return (
    <Box ref={meshRef} position={position} scale={0.5}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.2}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
      />
    </Box>
  )
}

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} />
      <FloatingCube position={[-2, 1, 0]} color="#22c55e" speed={1.2} />
      <FloatingCube position={[2, -1, -1]} color="#3b82f6" speed={0.8} />
      <FloatingCube position={[0, 2, -2]} color="#f59e0b" speed={1.5} />
    </>
  )
}

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const stats = [
    { icon: Code, label: 'Years Experience', value: '5+' },
    { icon: Coffee, label: 'Projects Completed', value: '50+' },
    { icon: Calendar, label: 'Happy Clients', value: '30+' },
    { icon: MapPin, label: 'Countries Worked', value: '10+' }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold"
              >
                About <span className="gradient-text">Me</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={inView ? { opacity: 1, width: '100px' } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-accent-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Calendar className="w-5 h-5 text-accent-400" />
                <span>{personalInfo.availability}</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="glass-effect p-4 rounded-lg text-center hover:neon-glow transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'Three.js', 'Python', 'AWS'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
                    className="px-4 py-2 glass-effect rounded-full text-sm font-medium text-accent-400 hover:neon-glow transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-96 lg:h-[500px]"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <Scene3D />
            </Canvas>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-accent-500/20 rounded-full blur-xl animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
    </section>
  )
}

export default About
