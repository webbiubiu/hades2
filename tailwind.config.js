/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b35',
          50: '#fff4f0',
          100: '#ffe9de',
          200: '#ffd5c4',
          300: '#ffb899',
          400: '#ff8f5d',
          500: '#ff6b35',
          600: '#f04e1c',
          700: '#c73a13',
          800: '#a43217',
          900: '#862d18',
        },
        dark: {
          50: '#1a1a1a',
          100: '#111111',
          200: '#0a0a0a',
          300: '#000000',
        }
      },
      fontFamily: {
        'gaming': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(26, 26, 26, 0.7) 100%)',
        'card-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
      }
    },
  },
  plugins: [],
}