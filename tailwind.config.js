const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      animation: {
        'fadein': 'fadein 1s linear forwards'
      },
      keyframes: {
        'fadein': {
          '0%, 50%': {opacity: 0},
          '100%': {opacity: 1}
        }
      },
      boxShadow: {
        'search': 'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px',
        'border': 'inset 0 -1px rgb(55 65 81 / 100%)'
      },
    },
  },
  plugins: [],
}
