/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
    },
    screens: {
      mobile: { max: "767px" },
      tablet: { min: "768px", max: "1199px" },
      pc: { min: "1200px" },
    },
  },
  plugins: [],
};
