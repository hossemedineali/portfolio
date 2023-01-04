/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      passion: ["Passions Conflict", "cursive"],
      rubik: ["Rubik Bubbles", "cursive"],
      Sevillana: ["Sevillana", "cursive"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#994AA6",
      white: "#fff",
      black: "#000",
      Cviolet: "#8a0a0a",
      Cyellow: "#596606",
      Cblue: "#06529e",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
