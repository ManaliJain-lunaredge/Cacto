/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1570px',
        '3xl': '1720px', // Custom breakpoint for 1560px
        'xl-1280': '1280px', // Custom breakpoint for 1280px
      },
    },
  },
  plugins: [],
}
