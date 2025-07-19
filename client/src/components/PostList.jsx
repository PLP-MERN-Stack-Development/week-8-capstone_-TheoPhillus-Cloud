import React from 'react'

// Sample data (replace with props or fetched posts)
const posts = [
  {
    slug: 'react-hooks',
    title: 'Understanding React Hooks',
    excerpt: 'Learn how to use useState and useEffect to manage state and side effects in React.',
  },
  {
    slug: 'tailwind-css',
    title: 'Styling with Tailwind CSS',
    excerpt: 'Tailwind makes styling fast and responsive with utility-first classes.',
  },
  {
    slug: 'node-api',
    title: 'Building a REST API with Node.js',
    excerpt: 'Set up Express routes, connect to MongoDB, and handle CRUD operations.',
  },
]

export default function PostList() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        Posts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => (
          <div
            key={p.slug}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-6"
          >
            <h3 className="text-xl font-bold mb-2 text-brand-700 dark:text-brand-50">
              {p.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {p.excerpt}
            </p>
            <a
              href={`/posts/${p.slug}`}
              className="inline-block text-brand-500 hover:text-brand-700 font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}