const { colors } = require('./src/styles/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter_400Regular'],
        bold: ['Inter_700Bold'],
      },

      colors,
    },
  },
  plugins: [],
};
