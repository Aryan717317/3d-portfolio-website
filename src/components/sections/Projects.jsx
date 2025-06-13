import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Box, MeshDistortMaterial, Text } from '@react-three/drei'
import { projects } from '../../data/portfolioData'
import { ExternalLink, Github, X, Eye, Code, Calendar } from 'lucide-react'

const ProjectCard3D = ({ project, position, isSelected, onClick }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      if (isSelected) {
        meshRef.current.scale.setScalar(1.1)
      } else {
        meshRef.current.scale.setScalar(1)
      }
    }
  })

  return (
    <group>
      <Box
        ref={meshRef}
        position={position}
        args={[2, 1.2, 0.1]}
        onClick={onClick}
        onPointerOver={(e) => (document.body.style.cursor = 'pointer')}
        onPointerOut={(e) => (document.body.style.cursor = 'auto')}
      >
        <MeshDistortMaterial
          color={isSelected ? '#22c55e' : '#3b82f6'}
          attach="material"
          distort={isSelected ? 0.3 : 0.1}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
        />
      </Box>
      <Text
        position={[position[0], position[1] + 0.8, position[2] + 0.1]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {project.title}
      </Text>
    </group>
  )
}

const ProjectsScene = ({ selectedProject, setSelectedProject }) => {
  const positions = [
    [-3, 0, 0],
    [0, 0, 0],
    [3, 0, 0],
    [-1.5, -2, 0]
  ]

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.3} />
      
      {projects.slice(0, 4).map((project, index) => (
        <ProjectCard3D
          key={project.id}
          project={project}
          position={positions[index]}
          isSelected={selectedProject?.id === project.id}
          onClick={() => setSelectedProject(
            selectedProject?.id === project.id ? null : project
          )}
        />
      ))}
    </>
  )
}

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="glass-effect p-8 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <div className="flex items-center space-x-4 text-gray-300">
              <span className="flex items-center space-x-1">
                <Code className="w-4 h-4" />
                <span>{project.category}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
              </span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 rounded-full glass-effect hover:bg-white/20 transition-all duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Project Image */}
        <div className="mb-6 rounded-xl overflow-hidden glass-effect p-4">
          <div className="w-full h-64 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-lg">Project Preview</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
          <p className="text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2 text-gray-300"
              >
                <div className="w-2 h-2 bg-accent-400 rounded-full" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 glass-effect rounded-full text-sm text-accent-400 border border-accent-400/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:from-accent-600 hover:to-accent-700 transition-all duration-300"
          >
            <Eye className="w-5 h-5" />
            <span>Live Demo</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-6 py-3 glass-effect text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <Github className="w-5 h-5" />
            <span>View Code</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

const ProjectGrid = ({ inView }) => {
  const [selectedModal, setSelectedModal] = useState(null)

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-effect rounded-xl overflow-hidden hover:neon-glow transition-all duration-300 group cursor-pointer"
            onClick={() => setSelectedModal(project)}
          >
            {/* Project Image */}
            <div className="h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              <span className="text-gray-300 text-lg relative z-10">
                {project.title}
              </span>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="text-xs text-accent-400 bg-accent-400/20 px-2 py-1 rounded-full">
                  {project.year}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 glass-effect rounded-full text-accent-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 glass-effect rounded-full text-gray-400">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex space-x-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-1 py-2 text-sm bg-accent-500/20 text-accent-400 rounded-lg hover:bg-accent-500/30 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Eye className="w-4 h-4" />
                  <span>Demo</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-1 py-2 text-sm glass-effect text-gray-300 rounded-lg hover:text-white transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedModal && (
          <ProjectModal
            project={selectedModal}
            onClose={() => setSelectedModal(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={inView ? { opacity: 1, width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mx-auto mt-6"
          />
        </motion.div>

        {/* 3D Projects Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="h-96 glass-effect rounded-xl overflow-hidden mb-8">
            <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
              <ProjectsScene
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
              />
            </Canvas>
          </div>
          
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-effect p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors duration-300"
                >
                  View Project
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 glass-effect text-white rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Project Grid */}
        <ProjectGrid inView={inView} />
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent-500/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
    </section>
  )
}

export default Projects
