/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", ".index.html"],
  theme: {
    extend: {
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
      },
      colors: {
        background: '#F5F3F5',
      },
      fontSize: {
        'bigName': '16rem',
      }
    },
  },
  plugins: [],
}

