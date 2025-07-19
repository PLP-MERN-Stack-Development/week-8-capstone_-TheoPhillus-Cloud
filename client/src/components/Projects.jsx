import React from 'react'

const projects = [
  {
    title: 'Admin Portal',
    description: 'Secure login system with MongoDB integration and protected routes.',
    link: '/admin/dashboard'
  },
  {
    title: 'Post Manager',
    description: 'CRUD operations with Express, CORS handling, and health check endpoints.',
    link: '/posts'
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive UI built with React, Tailwind CSS, and Vite.',
    link: '/'
  }
]

export default function Projects() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-brand-700 dark:text-brand-50 mb-2">Projects</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Here are some of the full-stack applications I’ve designed and deployed:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map(p => (
          <div
            key={p.title}
            className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-brand-600 dark:text-brand-100 mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              {p.description}
            </p>
            <a
              href={p.link}
              className="text-sm font-medium text-brand-500 hover:text-brand-700 underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}