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
          500: '#52796F',
          700: '#354F52',
          900: '#2F3E46'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #52796F 0%, #84A98C 100%)',
        'gradient-light': 'linear-gradient(135deg, #CAD2C5 0%, #ffffff 100%)',
      }
    },
  },
  plugins: [],
}
