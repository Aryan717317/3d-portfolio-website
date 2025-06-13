import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo, socialLinks } from '../data/portfolioData'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Heart, 
  Coffee,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-dark-300/50 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Section - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">
              {personalInfo.name.split(' ')[0]} Dev
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting digital experiences with passion and precision. 
              Always excited about new challenges and opportunities.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-yellow-400" />
            </div>
          </motion.div>

          {/* Center Section - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.button
                  key={link.name}
                  whileHover={{ scale: 1.05, color: '#22c55e' }}
                  onClick={() => {
                    const element = document.querySelector(link.href)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {Object.entries(socialLinks).map(([platform, url]) => {
                const Icon = socialIcons[platform]
                if (!Icon) return null
                
                return (
                  <motion.a
                    key={platform}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:neon-glow transition-all duration-300"
                    aria-label={platform}
                  >
                    <Icon className="w-5 h-5 text-accent-400" />
                  </motion.a>
                )
              })}
            </div>

            {/* Contact Info */}
            <div className="space-y-1 text-sm text-gray-300">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.location}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/10 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with React, Three.js, and lots of creativity
              </p>
            </div>

            {/* Back to Top */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-full hover:neon-glow transition-all duration-300 text-accent-400"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Tech Stack Credits */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-6 pt-4 border-t border-white/5"
        >
          <div className="flex flex-wrap justify-center items-center space-x-4 text-xs text-gray-500">
            <span>Powered by:</span>
            <span className="flex items-center space-x-1">
              <span>⚛️</span>
              <span>React</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>🎮</span>
              <span>Three.js</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>🎨</span>
              <span>Tailwind CSS</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>✨</span>
              <span>Framer Motion</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>⚡</span>
              <span>Vite</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-16 h-16 bg-accent-500/5 rounded-full blur-xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-primary-500/5 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
    </footer>
  )
}

export default Footer
