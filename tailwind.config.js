/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("tailwindcss-preset-px-to-rem")],
  theme: {
    extend: {},
  },
  plugins: [],
};
