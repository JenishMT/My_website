/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans - serif"],
        rubikOne: ["Rubik Mono One", "monospace"],
        openSans: ["Open Sans", "sans - serif"],
        notoSans: ["Noto Sans", "sans - serif"],
        montserrat: ["Montserrat", "sans - serif"],
        inter: ["Inter", "sans - serif"],
        interTight: ["Inter", "sans - serif"],
        inspiration: ["Inspiration", "cursive"],
      },
      colors: {
        primary: "rgb(51 65 85)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
