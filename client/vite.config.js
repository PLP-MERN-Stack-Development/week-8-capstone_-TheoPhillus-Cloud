import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  optimizeDeps: {
    include: [
      '@tailwindcss/typography',
      '@tailwindcss/forms',
    ],
  },
  ...(command === 'serve' && {
    server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }


  }),
}))