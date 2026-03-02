/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ============================================
        // BIONEURAL SOLUTIONS - NUEVA IDENTIDAD PREMIUM
        // Verde Bosque + Dorado Premium
        // ============================================

        // Colores Principales
        'forest': {
          DEFAULT: '#004B30',      // Verde Bosque Principal
          50: '#E8F5EE',
          100: '#C6E7D4',
          200: '#8FD4AC',
          300: '#5BBF83',
          400: '#2EA55E',
          500: '#004B30',          // Base
          600: '#003D27',
          700: '#002E1E',
          800: '#001F14',
          900: '#00100A',
          950: '#000805',
        },

        'gold': {
          DEFAULT: '#D4AF37',      // Dorado Premium Principal
          50: '#FFFDF0',
          100: '#FEF7D0',
          200: '#FCEF9F',
          300: '#F9E46E',
          400: '#F2D641',
          500: '#D4AF37',          // Base
          600: '#B8860B',          // Bronce/Dorado oscuro
          700: '#8B6914',
          800: '#6B500F',
          900: '#4A370A',
        },

        // Colores de Acento
        'bio-green': '#7CB342',     // Verde Bio para iconos/bordes
        'bio-light': '#A5D66D',     // Verde Bio claro
        'cream': '#F8F9FA',         // Fondo crema claro
        'charcoal': '#1A1A2A',      // Gris carbón para texto

        // Colores Legacy (mantener compatibilidad)
        'primary': '#004B30',      // Alias: forest DEFAULT
        'primary-dark': '#003D27', // Alias: forest 600
        'primary-light': '#7CB342', // Alias: bio-green
        'secondary': '#1A1A2A',    // Alias: charcoal
        'accent': '#D4AF37',       // Alias: gold DEFAULT

        // Colores UI
        'surface': {
          light: '#FFFFFF',
          dark: '#0D1A12',
        },
        'background': {
          light: '#F8F9FA',
          dark: '#0A0F0D',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },

      backgroundImage: {
        'forest-gradient': 'linear-gradient(135deg, #004B30 0%, #003D27 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
        'hero-gradient': 'linear-gradient(180deg, #004B30 0%, #003D27 50%, #0D1A12 100%)',
        'premium-pattern': "radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
      },

      boxShadow: {
        'card': '0 4px 20px rgba(0, 75, 48, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 75, 48, 0.15)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.4)',
        'forest-glow': '0 0 40px rgba(0, 75, 48, 0.3)',
        'hero': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },

      animation: {
        'gold-shimmer': 'goldShimmer 3s ease-in-out infinite',
        'float': 'floatUp 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },

      keyframes: {
        goldShimmer: {
          '0%, 100%': { backgroundPosition: '-200% center' },
          '50%': { backgroundPosition: '200% center' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}
