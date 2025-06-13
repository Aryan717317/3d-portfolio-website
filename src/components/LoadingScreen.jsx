import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

const AnimatedSphere = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#22c55e"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100"
    >
      <div className="text-center">
        <div className="w-64 h-64 mx-auto mb-8">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedSphere />
          </Canvas>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold gradient-text">
            Loading Portfolio
          </h1>
          <p className="text-gray-300 text-lg">
            Preparing an amazing experience...
          </p>
          
          <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto mt-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
