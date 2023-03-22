/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#00378B',
        'dark-blue': '#002866',
        'white': '#FAFAFA',
        'gray': {
          '5': '#F6F6F6',
          '20': '#D9D9D9',
          '50': '#484B55',
          '60': '#393A3F',
          '80': '#1D202D',
          '90': '#12131B'
        },
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}