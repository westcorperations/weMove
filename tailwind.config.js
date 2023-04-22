/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          50:'#1e293b',
          100:'#1e1b4b',

        }
      }
    },
  },
  plugins: [],
}

