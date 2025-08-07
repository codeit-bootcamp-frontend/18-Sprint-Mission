import { createGlobalStyle } from "styled-components";
import globalTheme from "@/styles/theme.js";
import generateTypographyCSS from "@/styles/utils/typography.utils.js";
import generateColorCSS from "@/styles/utils/colors.utils.js";
// :root 에 추가할 컬러팔레트 전역변수를 통해 동적 생성
const colorVariables = Object.entries(globalTheme.colors).map(
  ([key, value]) => `--${key}: ${value};`
);
// 공통 컴포넌트 스타일 정의
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
    -webkit-tap-highlight-color: transparent;
  }
  html,body{background-color: var(--base-background-color);}
  ${generateColorCSS}
  ${generateTypographyCSS}
  .logo {
    display: block;
  }
  .min-vh {
    min-height: calc(var(--vh, 1vh) * 100);
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .v-ellipsis {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
   
`;
export default GlobalComponentsStyles;
