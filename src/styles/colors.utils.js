export const colors = {
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#9ca3af",
  gray400: "#a0a0a6",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  gray900: "#111827",

  coolGray50: "#f7f7f8",
  coolGray100: "#e8ebed",
  coolGray200: "#e5e7eb",
  coolGray300: "#bac0c4",
  coolGray400: "#9ea4a8",
  coolGray500: "#72787f",
  coolGray600: "#454c53",
  coolGray700: "#374151",
  coolGray800: "#26282b",
  coolGray900: "#1b1d1f",

  primary100: "#3692ff",
  primary200: "#1967d6",
  primary300: "#1251aa",

  brand: "#cfe5ff",
  white: "#ffffff",
  black: "#000000",
  error: "#f74747",
};

const generateColorCSS = () => {
  let colorCss = "";
  Object.entries(colors).forEach(([key, value]) => {
    colorCss += `
    .fc-${key}{
      color:${value}
    }
  `;
  });
  Object.entries(colors).forEach(([key, value]) => {
    colorCss += `
    .bg-${key}{
      background-color:${value}
    }
  `;
  });
  return colorCss;
};
export default generateColorCSS;
