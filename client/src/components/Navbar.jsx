// components/Navbar.jsx
import React from 'react'
import { Link } from 'react-scroll'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-xl font-bold text-brand-600 dark:text-brand-400 cursor-pointer"
            >
              Theophillus
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer"
              >
                About
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer"
              >
                Skills
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer"
              >
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}