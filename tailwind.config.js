/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#e60045',
        },
        secondary: {
          500: '#22262a',
          600: '#16191d',

        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  
}