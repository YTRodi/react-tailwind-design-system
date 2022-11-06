const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      current: colors.current,
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      neutral: colors.slate,
      brand: colors.indigo,
      rose: {
        600: colors.rose['600'],
        400: colors.rose['400'],
        50: colors.rose['50'],
      },
      amber: {
        600: colors.amber['600'],
        400: colors.amber['400'],
        50: colors.amber['50'],
      },
      teal: {
        600: colors.teal['600'],
        400: colors.teal['400'],
        50: colors.teal['50'],
      },
    },
    extend: {},
  },
  plugins: [],
};
