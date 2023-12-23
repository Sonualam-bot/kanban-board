/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      sm: "0px",
      md: "500px",
      lg: "1000px",
      xl: "1200px",
      "2xl": "1536px",
      cw: { max: "680px" },
    },
  },

  plugins: [],
};
