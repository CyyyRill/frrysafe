/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '2025px',
    }
  },
  plugins: [],
}

