import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Text, Box, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { skills } from '../../data/portfolioData'

const SkillSphere = ({ position, skill, isHovered, onClick }) => {
  const meshRef = useRef()
  const { viewport } = useThree()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      if (isHovered) {
        meshRef.current.scale.setScalar(1.2)
      } else {
        meshRef.current.scale.setScalar(1)
      }
    }
  })

  return (
    <group>
      <Sphere
        ref={meshRef}
        position={position}
        args={[0.5, 32, 32]}
        onClick={onClick}
        onPointerOver={(e) => (document.body.style.cursor = 'pointer')}
        onPointerOut={(e) => (document.body.style.cursor = 'auto')}
      >
        <MeshDistortMaterial
          color={isHovered ? '#22c55e' : '#3b82f6'}
          attach="material"
          distort={isHovered ? 0.3 : 0.1}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      <Text
        position={[position[0], position[1] - 0.8, position[2]]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill.name}
      </Text>
    </group>
  )
}

const SkillsScene = ({ selectedCategory, hoveredSkill, setHoveredSkill }) => {
  const skillsData = skills.find(cat => cat.category === selectedCategory)?.technologies || []
  
  const positions = [
    [-2, 1, 0], [0, 1.5, -1], [2, 1, 0],
    [-1.5, 0, 1], [1.5, 0, 1], [0, -1, 0]
  ]

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.3} />
      
      {skillsData.slice(0, 6).map((skill, index) => (
        <SkillSphere
          key={skill.name}
          position={positions[index] || [0, 0, 0]}
          skill={skill}
          isHovered={hoveredSkill === skill.name}
          onClick={() => setHoveredSkill(hoveredSkill === skill.name ? null : skill.name)}
        />
      ))}
    </>
  )
}

const SkillCard = ({ skill, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-effect p-6 rounded-xl hover:neon-glow transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
        </div>
        <span className="text-accent-400 font-bold">{skill.level}%</span>
      </div>
      
      <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className="h-full bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"
        />
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [selectedCategory, setSelectedCategory] = useState('Frontend')
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={inView ? { opacity: 1, width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mx-auto mt-6"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 3D Interactive Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((category) => (
                <motion.button
                  key={category.category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.category
                      ? 'bg-gradient-to-r from-accent-500 to-primary-500 text-white'
                      : 'glass-effect text-gray-300 hover:text-white'
                  }`}
                >
                  {category.category}
                </motion.button>
              ))}
            </div>

            <div className="h-96 glass-effect rounded-xl overflow-hidden">
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <SkillsScene
                  selectedCategory={selectedCategory}
                  hoveredSkill={hoveredSkill}
                  setHoveredSkill={setHoveredSkill}
                />
              </Canvas>
            </div>

            {hoveredSkill && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-effect p-4 rounded-lg text-center"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {hoveredSkill}
                </h4>
                <p className="text-gray-300 text-sm">
                  Click on the sphere to interact with the skill visualization
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Skills List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {selectedCategory} Skills
            </h3>
            
            <div className="space-y-4">
              {skills
                .find(cat => cat.category === selectedCategory)
                ?.technologies.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    inView={inView}
                  />
                ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              I'm always exploring new technologies and methodologies to stay at the forefront of 
              web development. Currently focusing on advanced 3D web experiences, AI integration, 
              and performance optimization techniques.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-accent-500/10 rounded-full blur-xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
    </section>
  )
}

export default Skills
