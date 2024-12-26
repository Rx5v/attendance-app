/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark2: '#21292D',
        dark1: '#0B0F13',
        accent: '#00FFD4'
      }
    },
  },
  plugins: [],
}