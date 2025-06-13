import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Torus, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei'
import emailjs from '@emailjs/browser'
import { personalInfo, socialLinks } from '../../data/portfolioData'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Github, 
  Linkedin, 
  Twitter,
  Instagram
} from 'lucide-react'

const FloatingElements = () => {
  const torusRef = useRef()
  const sphereRef = useRef()

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01
      torusRef.current.rotation.y += 0.005
      torusRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01
      sphereRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2
    }
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} />
      <Stars
        radius={50}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      <Torus
        ref={torusRef}
        position={[-3, 1, -2]}
        args={[1, 0.3, 16, 100]}
      >
        <MeshDistortMaterial
          color="#22c55e"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Torus>
      
      <Sphere
        ref={sphereRef}
        position={[3, -1, -3]}
        args={[0.8, 32, 32]}
      >
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.2}
          speed={1.5}
          roughness={0.2}
          metalness={0.7}
        />
      </Sphere>
    </>
  )
}

const ContactForm = ({ inView }) => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Using EmailJS - replace with your service ID, template ID, and public key
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: personalInfo.email
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      ref={formRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name and Email Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name *
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.name 
                ? 'focus:ring-red-500 border-red-500' 
                : 'focus:ring-accent-500'
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.email 
                ? 'focus:ring-red-500 border-red-500' 
                : 'focus:ring-accent-500'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email}
            </motion.p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Subject *
        </label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.subject 
              ? 'focus:ring-red-500 border-red-500' 
              : 'focus:ring-accent-500'
          }`}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-1 flex items-center"
          >
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.subject}
          </motion.p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 resize-none transition-all duration-300 ${
            errors.message 
              ? 'focus:ring-red-500 border-red-500' 
              : 'focus:ring-accent-500'
          }`}
          placeholder="Tell me about your project or just say hi!"
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-1 flex items-center"
          >
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.message}
          </motion.p>
        )}
        <div className="text-right text-sm text-gray-400 mt-1">
          {formData.message.length}/500
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </motion.button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center space-x-2 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Message sent successfully! I'll get back to you soon.</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center space-x-2 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
        >
          <AlertCircle className="w-5 h-5" />
          <span>Failed to send message. Please try again or contact me directly.</span>
        </motion.div>
      )}
    </motion.form>
  )
}

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing together.
          </p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={inView ? { opacity: 1, width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mx-auto mt-6"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & 3D Scene */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:neon-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-medium">{personalInfo.email}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:neon-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-medium">{personalInfo.phone}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:neon-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white font-medium">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* 3D Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-64 glass-effect rounded-xl overflow-hidden"
            >
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <FloatingElements />
              </Canvas>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {Object.entries(socialLinks).map(([platform, url]) => {
                  const Icon = socialIcons[platform]
                  if (!Icon) return null
                  
                  return (
                    <motion.a
                      key={platform}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:neon-glow transition-all duration-300"
                      aria-label={platform}
                    >
                      <Icon className="w-6 h-6 text-accent-400" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <ContactForm inView={inView} />
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent-500/20 rounded-full blur-xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
    </section>
  )
}

export default Contact
