/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBgColor: "#f9f2ed",
        mainBlue: "#4d559f",
        mainOrange: "#de5e3c",
      },
    },
  },
  plugins: [],
};
