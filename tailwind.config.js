/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("tailwindcss-preset-px-to-rem")],
  theme: {
    extend: {
      colors: {
        eworldRed: "#ff6f00",
        eworld: "#f49e16",
        kakao: "#fde500",
        naver: "#03c759",
        google: "#4285f4",
        home: "#0E4D3C",
      },
      fontFamily: {
        pretendard: ["Pretendard-Regular", "sans-serif"],
      },
    },
  },
  safelist: [
    {
      pattern: /bg-.*/, // 모든 bg-로 시작하는 클래스
    },
  ],
  plugins: [],
};
