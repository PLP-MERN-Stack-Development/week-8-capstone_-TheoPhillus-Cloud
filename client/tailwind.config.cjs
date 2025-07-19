// tailwind.config.js

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enables class-based dark mode switching
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb', // Primary blue
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a8a'
        },
        accent: {
          500: '#f59e0b', // Amber
          700: '#d97706'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),       // for consistent form styling
    require('@tailwindcss/typography')   // for rich text formatting
  ]
}