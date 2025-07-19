// client/src/components/AboutCard.jsx
import React from 'react'

export default function AboutCard() {
  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mx-auto max-w-3xl">
      <h2 className="text-2xl font-bold text-brand-700 dark:text-brand-50 mb-4">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300">
        I specialize in building scalable and maintainable full-stack applications using the MERN stack.
        My passion lies in clean UI/UX, DevOps workflows, and empowering users through intuitive design.
        When I’m not coding, I’m optimizing pipelines, exploring Tailwind plugins, or diving into accessibility features.
      </p>
    </section>
  )
}