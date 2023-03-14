/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'input-focus': '0 0 5px 1px rgba(96,165,250,0.8);',
        'input-hover': '0 0 5px 2px rgba(96,165,250,0.8);',
      }
    },
  },
  plugins: [],
}