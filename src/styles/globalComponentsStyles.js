import { createGlobalStyle } from "styled-components";
import generateTypographyCSS, { typography } from "./typography.utils";
import generateColorCSS, { colors } from "./colors.utils.js";
const colorVariables = Object.entries(colors).map(([key, value]) => `--${key}: ${value};`);
const GlobalComponentsStyles = createGlobalStyle`
  :root {
    ${colorVariables}
    --base-text-color: var(--gray800);
    --base-background-color: var(--white);
    --base-font-family: "Pretendard";
  }
  * {
    vertical-align: baseline;
    color: var(--base-text-color);
    font-family: var(--base-font-family), -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, "Helvetica Neue", "Apple SD Gothic Neo",
      "Malgun Gothic", sans-serif;
    background-color: var(--base-background-color);
    -webkit-tap-highlight-color: transparent;
  }
  ${generateColorCSS}
  ${generateTypographyCSS}
  

`;
console.log(typography["txt-xs"].fontSize);
console.log(colors.coolGray100);
export default GlobalComponentsStyles;
