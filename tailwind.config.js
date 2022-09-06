/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
    keyframes: {
      slideDown:{ '0%':{ transform: 'translateY(-100%)'} , '100%': { transform: 'translateY(0)'}, },
      fadeIn:{ from:{opacity:0} , to:{opacity:1 }
      },
    },
    animation:{
      slideDown: 'slideDown .4s ease-in-out',
      fadeIn: 'fadeIn .5s ease-in-out',
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
