import React from 'react'
import Hero from '../components/Hero'
import AboutCard from '../components/AboutCard'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <Hero />

        <section className="py-12 px-4 bg-brand-50 dark:bg-brand-900">
          <AboutCard />
        </section>

        <section className="py-12 px-4 bg-white dark:bg-gray-800">
          <Skills />
        </section>

        <section className="py-12 px-4 bg-brand-100 dark:bg-gray-900">
          <Projects />
        </section>

        <section className="py-12 px-4 bg-accent-500 dark:bg-accent-700 text-white">
          <Contact />
        </section>
      </div>

      <Footer />
    </main>
  )
}