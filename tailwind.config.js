/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ps': "url('/links/ps.png')",
        'pc': "url('/links/pc.png')",
        'xbox': "url('/links/xbox.jpg')"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}