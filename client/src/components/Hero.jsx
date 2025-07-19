// client/src/components/Hero.jsx
import React from 'react'

export default function Hero() {
  return (
    <header className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">Theophillus Motsoane</h1>
        <p className="text-xl text-gray-300 mb-6">
          Full-Stack Developer • MERN Expert • DevOps Enthusiast
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-brand-500 hover:bg-brand-700 text-white font-medium rounded shadow-md transition focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          Contact Me
        </a>
      </div>
    </header>
  )
}