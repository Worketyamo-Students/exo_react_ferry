/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
       "bgcolors":"rgba(255, 255, 255, 1)",
       "navbartextcolor":"rgba(64, 64, 64, 0.8)",
       "buttonbgcolor":"rgba(149, 42, 42, 1)",
       "paragraph_colors":"rgba(32, 32, 32, 1)",
       "bgRose":"rgba(238, 221, 221, 1)",
      },
      fontFamily:{
        'font_openSans':'var(--font_open_sans)'
      }
    }
  }
}