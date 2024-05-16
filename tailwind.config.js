/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      yellow: "#feea33",
      kingBlue: "#1E90FF",
      supportBlue: "#0d47a1",
      cardBlue: "#0c355b",
      darkBlue: "#00008B",
      darkwhite: "#f4f2ee",
      mustardyellow: "#FFBF00",
      white: "#FFFFFF",
      black: "#000000",
    },

    fontFamily: {
      poppins: ["Poppins"],
      oxygen: ["Oxygen"],
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      ext: "34vmin",
      ext1: "28vmin",
    },
  },
  plugins: [],
};
