/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["fontRickAndMorty", "sans-serif"],
      },
      colors: {
        maximumblue: "#41b4c9",
        squidblue: "#203745",
        neongreen: "#bfde42",
      },
    },
  },
  plugins: [require("daisyui")],
};
