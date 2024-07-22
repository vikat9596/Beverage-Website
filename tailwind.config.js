/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary: "#f97316",
    },
    fontFamily:{
      sans: ["Poppins","sans-serif"],
      handwriting: ["Merienda", "cursive"]
    },
    container: {
      center:true,
      padding:{
        DEFAULT: "1rem",
        sm:"2rem",
        lg: "5rem",
        xl: "5rem",
        "2xl": "6rem",
      }
    }
  },
  plugins: [],
}

