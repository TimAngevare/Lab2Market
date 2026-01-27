/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#CAD2C5',
          100: '#84A98C',
          200: '#6B8E76',
          300: '#5C8268',
          400: '#52796F',
          500: '#52796F',
          600: '#476560',
          700: '#354F52',
          800: '#324749',
          900: '#2F3E46'
        }
      },
      fontFamily: {
        sans: ['Futura', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Futura', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #52796F 0%, #84A98C 100%)',
        'gradient-light': 'linear-gradient(135deg, #CAD2C5 0%, #ffffff 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2F3E46 0%, #354F52 100%)',
        'gradient-radial': 'radial-gradient(circle at center, #84A98C 0%, #52796F 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(82, 121, 111, 0.15)',
        'soft-lg': '0 10px 40px -4px rgba(82, 121, 111, 0.2)',
        'glow': '0 0 30px -5px rgba(82, 121, 111, 0.4)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
