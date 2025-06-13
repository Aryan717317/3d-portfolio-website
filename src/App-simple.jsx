import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          3D Portfolio
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Interactive 3D Portfolio Website
        </p>
        <div className="glass-effect p-8 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20">
          <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
          <p className="text-gray-300">
            Your stunning 3D portfolio is ready to be customized and deployed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
