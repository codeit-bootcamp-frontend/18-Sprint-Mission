import { css } from "styled-components";
import globalTheme from "../theme";
import { convertPxToRem, convertPxToVw, convertLineHeightToPercent } from "./convert.utils";
// 반복적인 반응형 작성 최소화를 위해
// 전체 컴포넌트에서 사용될 font관련 util 함수 선언
const fontSize = (font) => css`
  font-size: ${convertPxToRem(globalTheme.fonts[font].fontSize)};
  line-height: ${convertLineHeightToPercent(
    globalTheme.fonts[font].lineHeight,
    globalTheme.fonts[font].fontSize
  )};
  @media all and (max-width: 1024px) {
    ${() => {
      if (globalTheme.fonts[font].tabletSize) {
        return css`
          font-size: ${convertPxToRem(globalTheme.fonts[font].tabletSize)};
        `;
      }
    }}
  }
  @media all and (max-width: 768px) {
    ${() => {
      if (globalTheme.fonts[font].minClamp) {
        return css`
          font-size: clamp(
            ${convertPxToRem(globalTheme.fonts[font].minClamp)},
            ${convertPxToVw(globalTheme.fonts[font].valClamp)},
            ${convertPxToRem(globalTheme.fonts[font].valClamp)}
          );
        `;
      }
      return css`
        font-size: ${convertPxToRem(globalTheme.fonts[font].valClamp)};
      `;
    }}
  }
`;
export default fontSize;
