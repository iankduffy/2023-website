/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

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
        brandLight: '#21354F',
        light: '#AFB9C6',
      },
      gridTemplateColumns: {
        article: '2fr 1fr',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-last', '&:not(:last-of-type)');
      addVariant(
        'sibling-hover',
        '&:has(.child:hover) .child:is(:not(:hover, :focus))'
      );
    }),
  ],
};
