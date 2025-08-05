import globalTheme from "../theme";
// className 형태로 텍스트 컬러나 배경컬러등 사용을 위해 동적 클래스네임 생성
const generateColorCSS = () => {
  let colorCss = "";
  Object.entries(globalTheme.colors).forEach(([key, value]) => {
    colorCss += `
    .fc-${key}{
      color:${value}
    }
  `;
  });
  Object.entries(globalTheme.colors).forEach(([key, value]) => {
    colorCss += `
    .bg-${key}{
      background-color:${value}
    }
  `;
  });
  return colorCss;
};
export default generateColorCSS;
