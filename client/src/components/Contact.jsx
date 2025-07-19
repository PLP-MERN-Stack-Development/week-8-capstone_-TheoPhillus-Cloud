import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // 💡 Replace this with API call or mailto later
    alert('Message sent! 🚀')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-brand-700 dark:text-brand-50 mb-2">Contact Me</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        I'd love to hear from you! Whether it's a collaboration, question, or friendly hello.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            autoComplete="on"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-700 dark:text-white resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-brand-500 hover:bg-brand-700 text-white font-semibold rounded transition focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}