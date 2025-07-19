import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const skills = [
  'Full-Stack Development (MERN)',
  'Responsive UI with Tailwind CSS',
  'CI/CD with GitHub Actions',
  'Secure Routing & Authentication',
  'Accessibility & Semantic HTML',
  'Debugging & API Integration',
  'Monorepo Structuring',
  'Deployment to Vercel / Render'
]

export default function Skills() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-brand-700 dark:text-brand-50 mb-2">Skills</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Tools and practices I use to build clean, scalable web applications:
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map(skill => (
          <li
            key={skill}
            className="flex items-center gap-3 text-gray-800 dark:text-gray-100"
          >
            <div className="flex items-center justify-center h-5 w-5">
              <CheckCircleIcon className="h-4 w-4 text-brand-500" />
            </div>
            <span className="leading-snug">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}