/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    styled: true,
    themes: [ "night", "white"],
  },
  plugins: [require("daisyui")],
}