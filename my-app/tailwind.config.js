/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          800: "#1E293B",
          900: "#0F172A",
        },

        "accent-violet-600": "#7C3AED",
        "accent-violet-100": "#DED9FE",
        "accent-rose": "#4F3F5E",
        "accent-lime": "#BEF264",
        "accent-amber": "#92400E",
      },
      fontFamily: {
        sans: ["NanumSquare", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
