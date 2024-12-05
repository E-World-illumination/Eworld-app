/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("tailwindcss-preset-px-to-rem")],
  theme: {
    extend: {
      colors: {
        eworld: "#FFAE1E",
        kakao: "#fde500",
        naver: "#03c759",
        google: "#4285f4",
      },
    },
  },
  plugins: [],
};
