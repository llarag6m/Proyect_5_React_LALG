/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home': "url('/images/fond.jpg')",
        'hero-pattern': "url('/images/fond1.png')",
        'hero-pattern1': "url('/images/rayquaza.jpg')",
      }
    },
  },
  plugins: [],
}

