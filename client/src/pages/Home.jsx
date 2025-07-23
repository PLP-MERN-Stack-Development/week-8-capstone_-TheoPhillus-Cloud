// Home.jsx
import React from 'react'
import ThemeProvider from '../context/ThemeProvider'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutCard from '../components/AboutCard'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <ThemeProvider>
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4">
          <section id="home">
            <Hero />
          </section>

          <section id="about" className="py-12 px-4 bg-brand-50 dark:bg-gray-800">
            <AboutCard />
          </section>

          <section id="skills" className="py-12 px-4 bg-white dark:bg-gray-800">
            <Skills />
          </section>

          <section id="projects" className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
            <Projects />
          </section>

          <section id="contact" className="py-12 px-4 bg-brand-500 dark:bg-brand-700 text-white">
            <Contact />
          </section>
        </div>

        <Footer />
      </main>
    </ThemeProvider>
  )
}