/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    '*.html',
    '_layouts/**/*.html',
    '_includes/**/*.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway'],
      sans: ['sans'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        brand: 'B87F2A', 
        brand-hover: #E0A955; // your accessible LIght gold
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}