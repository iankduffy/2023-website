/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandBackground: '#152233',
        light: '#AFB9C6',
      },
      gridTemplateColumns: {
        article: '2fr 1fr',
      },
    },
  },
  plugins: [],
};
