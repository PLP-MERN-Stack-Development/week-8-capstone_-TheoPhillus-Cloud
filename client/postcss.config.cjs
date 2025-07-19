// client/postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // ← not "tailwindcss"
    autoprefixer: {}
  }
}