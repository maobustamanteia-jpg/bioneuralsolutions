/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-dark': '#0a0f0d',
        'neon-green': '#00ff9d',
        'cyan-tech': '#00d2ff',
        'organic-leaf': '#4ade80',
        'soil-dark': '#2a2f2d',
        'fresno-coffee': '#6f4e37',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'neural-pattern': "radial-gradient(circle at center, #111827 0%, #000 100%)",
      }
    },
  },
  plugins: [],
}
