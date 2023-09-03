/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'light-green': 'rgb(155, 240, 11)',
        'blue-link':'#0067b8;'
      }
    },
  },
  plugins: [],
}

