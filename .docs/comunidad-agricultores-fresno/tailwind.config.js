/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4332',
          dark: '#14522B',
          light: '#52796F'
        },
        secondary: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706'
        },
        accent: {
          DEFAULT: '#95D5B2',
          light: '#B4E4C7'
        },
        cream: {
          DEFAULT: '#FEFAE0',
          light: '#FFFCF5'
        },
        coffee: {
          DEFAULT: '#2D3436',
          light: '#4A5459'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
