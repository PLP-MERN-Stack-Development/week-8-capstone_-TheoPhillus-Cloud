import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Theophillus Motsoane. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a
            href="https://github.com/TheoPhillus-Cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-500 transition"
          >
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/theophillus-motsoane-624762116"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-500 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}