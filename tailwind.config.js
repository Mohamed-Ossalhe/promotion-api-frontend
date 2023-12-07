/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat']
      },
      colors: {
        'main': '#085DA8',
        'second': '#FFE800',
        'accent': '#CF4D12'
      }
    },
  },
  plugins: [],
}

