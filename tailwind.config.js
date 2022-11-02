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
        'xbox': "url('/links/xbox.jpg')",
        'gamedk': "url('/cover-desktop.jpg')",
        'gamemb': "url('/cover-mobile.jpg')",
        'cond': "url('/consoles-cover.jpg')",
        'conm': "url('/console-mobile.jpg')",
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}