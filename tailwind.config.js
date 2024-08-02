/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC857",
        primaryDark: "#E5AC49",
        lightOrange: "#ffe9bd",
        darkGray: "#2E3A59",
        lightGray: "#465479",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        }
      }
    },
  },
  plugins: [],
}