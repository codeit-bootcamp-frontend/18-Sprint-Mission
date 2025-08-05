import globalTheme from "../theme";
import { convertPxToRem, convertPxToVw, convertLineHeightToPercent } from "./convert.utils";
// className 형태로 텍스트 사용을 위해 동적 클래스 네임 생성 및 미디어쿼리 작성
const generateTypographyCSS = () => {
  let typoCss = "";
  globalTheme.fontWeight.forEach((weight) => {
    typoCss += `.font-weight-${weight}{font-weight:${weight};}`;
  });
  Object.entries(globalTheme.fonts).forEach(([className, { fontSize, lineHeight }]) => {
    typoCss += `
        .${className} {
          font-size: ${convertPxToRem(fontSize)};
          line-height: ${convertLineHeightToPercent(lineHeight, fontSize)};
        }
      `;
  });

  typoCss += `@media all and (max-width: 1024px) {`;
  Object.entries(globalTheme.fonts).forEach(([className, { tabletSize }]) => {
    if (tabletSize) {
      typoCss += `
         .${className} {
            font-size: ${convertPxToRem(tabletSize)};
         }
        `;
    }
  });
  typoCss += `}`;

  typoCss += `@media all and (max-width: 768px) {`;
  Object.entries(globalTheme.fonts).forEach(([className, { valClamp, minClamp }]) => {
    if (minClamp) {
      typoCss += `
           .${className} {
              font-size: clamp(${convertPxToRem(minClamp)},
              ${convertPxToVw(valClamp)},
              ${convertPxToRem(valClamp)});
            }
        `;
    } else {
      typoCss += `
          .${className} {
             font-size: ${convertPxToRem(valClamp)};
            }
        `;
    }
  });
  typoCss += `}`;
  return typoCss;
};
export default generateTypographyCSS;
