/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'Overpass': ['sans-serif']
      },
    },
  },
  plugins: [],
}