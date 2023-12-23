/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  screens: {
    sm: { min: "0px", max: "500px" },
    md: { min: "680px", max: "1000px" },
    lg: { min: "1000px", max: "1200px" },
    xl: { min: "1200px" },
    "2xl": { min: "1536px" },
  },
  plugins: [],
};
