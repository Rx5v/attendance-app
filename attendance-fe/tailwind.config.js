/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark1: '#0B0F13',
        dark2: '#21292D',
        dark3: '#343F43',
        dark4: '#4E6671',
        accent: '#00FFD4'
      }
    },
  },
  plugins: [],
}