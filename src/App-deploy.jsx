import React from 'react'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              3D Portfolio
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-green-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-green-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="block text-white">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Alex Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full-Stack Developer & 3D Designer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with code and creativity. 
              Passionate about modern web technologies and immersive 3D graphics.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300">
              <span className="text-xl">⚡</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300">
              <span className="text-xl">💼</span>
            </a>
            <a href="mailto:alex@example.com"
               className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300">
              <span className="text-xl">📧</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Passionate full-stack developer with 5+ years of experience building scalable web applications 
                and immersive 3D experiences. I love turning complex problems into simple, beautiful solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Specialized in React, Node.js, and Three.js. Always exploring new technologies and 
                pushing the boundaries of what's possible on the web.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 border border-white/20 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 border border-white/20 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Core Technologies</h3>
              {[
                { name: 'React & Next.js', level: 95 },
                { name: 'Node.js & Express', level: 90 },
                { name: 'Three.js & WebGL', level: 85 },
                { name: 'TypeScript', level: 88 },
                { name: 'Python & AI/ML', level: 80 }
              ].map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-green-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "3D E-commerce Platform",
                description: "Interactive 3D product visualization with AR capabilities",
                tech: ["React", "Three.js", "WebGL"],
                demo: "https://demo1.example.com",
                github: "https://github.com/example/project1"
              },
              {
                title: "AI Portfolio Generator",
                description: "AI-powered tool for creating personalized portfolios",
                tech: ["Next.js", "OpenAI", "Prisma"],
                demo: "https://demo2.example.com",
                github: "https://github.com/example/project2"
              },
              {
                title: "VR Workspace",
                description: "Collaborative virtual reality workspace application",
                tech: ["React", "A-Frame", "WebRTC"],
                demo: "https://demo3.example.com",
                github: "https://github.com/example/project3"
              }
            ].map((project, index) => (
              <div key={index} className="border border-white/20 rounded-xl overflow-hidden backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-white/10 rounded-full text-green-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="flex-1 text-center py-2 text-sm bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300">
                      Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="flex-1 text-center py-2 text-sm border border-white/20 text-gray-300 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Ready to start your next project? Let's create something amazing together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-medium">alex@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Alex Developer
            </h3>
            <p className="text-gray-400 mb-6">
              Crafting digital experiences with passion and precision.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-green-400 transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-green-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-green-400 transition-colors">
                Twitter
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Alex Developer. Built with React, Vite, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
