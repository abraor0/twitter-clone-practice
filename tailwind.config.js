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
      }
    },
  },
  plugins: [],
}
