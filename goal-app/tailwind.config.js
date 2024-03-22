/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '340px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        navyBlue: '#46575A',
        deepBlue: '#12362A',
        lightGray: '#ADBC9F',
        darkGray: '#D9D9D9'
      }
    }
  },
  plugins: [],
}

