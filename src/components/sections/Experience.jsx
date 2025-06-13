import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cylinder, Sphere, Text, MeshDistortMaterial } from '@react-three/drei'
import { experience, education, certifications } from '../../data/portfolioData'
import { Briefcase, GraduationCap, Award, MapPin, Calendar, ChevronRight } from 'lucide-react'

const TimelineNode = ({ position, isActive, onClick, type = 'work' }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      if (isActive) {
        meshRef.current.scale.setScalar(1.2)
      } else {
        meshRef.current.scale.setScalar(1)
      }
    }
  })

  const colors = {
    work: '#22c55e',
    education: '#3b82f6',
    certification: '#f59e0b'
  }

  return (
    <group>
      <Sphere
        ref={meshRef}
        position={position}
        args={[0.3, 16, 16]}
        onClick={onClick}
        onPointerOver={(e) => (document.body.style.cursor = 'pointer')}
        onPointerOut={(e) => (document.body.style.cursor = 'auto')}
      >
        <MeshDistortMaterial
          color={colors[type]}
          attach="material"
          distort={isActive ? 0.3 : 0.1}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </group>
  )
}

const TimelineLine = ({ start, end }) => {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.atan2(
        end[1] - start[1],
        end[0] - start[0]
      )
    }
  })

  const distance = Math.sqrt(
    Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2)
  )

  return (
    <Cylinder
      ref={meshRef}
      position={[
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        start[2]
      ]}
      args={[0.02, 0.02, distance, 8]}
    >
      <meshBasicMaterial color="#4a5568" />
    </Cylinder>
  )
}

const Timeline3D = ({ selectedItem, setSelectedItem }) => {
  const positions = [
    [-3, 2, 0],    // Experience 1
    [-1, 1, 0],    // Experience 2
    [1, 0, 0],     // Experience 3
    [3, -1, 0],    // Education
    [2, -2.5, 0]   // Certifications
  ]

  const allItems = [
    ...experience.map(item => ({ ...item, type: 'work' })),
    ...education.map(item => ({ ...item, type: 'education' })),
    { id: 'certs', title: 'Certifications', type: 'certification' }
  ]

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.3} />
      
      {/* Timeline connections */}
      {positions.slice(0, -1).map((pos, index) => (
        <TimelineLine
          key={index}
          start={pos}
          end={positions[index + 1]}
        />
      ))}
      
      {/* Timeline nodes */}
      {allItems.slice(0, 5).map((item, index) => (
        <TimelineNode
          key={item.id}
          position={positions[index]}
          isActive={selectedItem?.id === item.id}
          onClick={() => setSelectedItem(
            selectedItem?.id === item.id ? null : item
          )}
          type={item.type}
        />
      ))}
    </>
  )
}

const ExperienceCard = ({ item, index, inView }) => {
  const icons = {
    work: Briefcase,
    education: GraduationCap,
    certification: Award
  }

  const Icon = icons[item.type] || Briefcase

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-effect p-6 rounded-xl hover:neon-glow transition-all duration-300 relative"
    >
      {/* Icon */}
      <div className="absolute -left-3 top-6 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
        <Icon className="w-3 h-3 text-white" />
      </div>

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-1">
          {item.title || item.degree}
        </h3>
        <p className="text-accent-400 font-medium">
          {item.company || item.school}
        </p>
        <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
          <span className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{item.duration}</span>
          </span>
          {item.location && (
            <span className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{item.location}</span>
            </span>
          )}
          {item.type && (
            <span className="px-2 py-1 text-xs bg-accent-500/20 text-accent-400 rounded-full">
              {item.type === 'work' ? 'Work' : item.type === 'education' ? 'Education' : 'Full-time'}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      {item.description && (
        <p className="text-gray-300 mb-4 leading-relaxed">
          {item.description}
        </p>
      )}

      {/* Achievements */}
      {item.achievements && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
          <ul className="space-y-1">
            {item.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                <ChevronRight className="w-3 h-3 text-accent-400 mt-0.5 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {item.technologies && (
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs glass-effect rounded-full text-accent-400"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* GPA for education */}
      {item.gpa && (
        <div className="mt-4 p-3 glass-effect rounded-lg">
          <span className="text-sm text-gray-300">GPA: </span>
          <span className="text-accent-400 font-semibold">{item.gpa}</span>
        </div>
      )}
    </motion.div>
  )
}

const CertificationCard = ({ cert, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-effect p-4 rounded-lg hover:neon-glow transition-all duration-300"
    >
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
          <Award className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
          <p className="text-sm text-gray-300 mb-2">{cert.issuer}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-accent-400">{cert.date}</span>
            <span className="text-xs text-gray-400">{cert.credentialId}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [selectedItem, setSelectedItem] = useState(null)

  const allExperience = [
    ...experience.map(item => ({ ...item, type: 'work' })),
    ...education.map(item => ({ ...item, type: 'education' }))
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional experience, education, and continuous learning path
          </p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={inView ? { opacity: 1, width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mx-auto mt-6"
          />
        </motion.div>

        {/* 3D Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="h-96 glass-effect rounded-xl overflow-hidden mb-8">
            <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
              <Timeline3D
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </Canvas>
          </div>
          
          {selectedItem && selectedItem.type !== 'certification' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-effect p-6 rounded-lg"
            >
              <ExperienceCard item={selectedItem} index={0} inView={true} />
            </motion.div>
          )}
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="w-6 h-6 text-accent-400 mr-3" />
              Professional Experience
            </h3>
            <div className="space-y-6 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 to-primary-500" />
              {experience.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  item={{ ...item, type: 'work' }}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-accent-400 mr-3" />
              Education
            </h3>
            <div className="space-y-6 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-accent-500" />
              {education.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  item={{ ...item, type: 'education' }}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Award className="w-6 h-6 text-accent-400 mr-3" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.credentialId}
                cert={cert}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary-500/10 rounded-full blur-xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-500/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
    </section>
  )
}

export default Experience
