/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00cfe1",
        "navy-deep": "#0a2373",
        "navy-mid": "#0d2f9e",
        "vopak-orange": "#fc7000",
        "vopak-cobalt": "#283ce1",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
