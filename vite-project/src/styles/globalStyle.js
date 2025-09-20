import { createGlobalStyle } from "styled-components";
import PretendardRegular from "@/assets/fonts/Pretendard-Regular.woff2";
import PretendardMedium from "@/assets/fonts/Pretendard-Medium.woff2";
import PretendardSemiBold from "@/assets/fonts/Pretendard-SemiBold.woff2";
import PretendardBold from "@/assets/fonts/Pretendard-Bold.woff2";
import PretendardExtraBold from "@/assets/fonts/Pretendard-ExtraBold.woff";
import ImgLogo from "@/assets/logo/logo.svg";
import ImgLogoText from "@/assets/logo/logo_text.svg";

const globalStyle = createGlobalStyle`
  :root {
    --color-primary-100: #3692FF;
    --color-primary-200: #1967D6;
    --color-primary-300: #1251AA;
    --color-gray-900: #111827;
    --color-gray-800: #1F2937;
    --color-gray-700: #374151;
    --color-gray-600: #4B5563;
    --color-gray-500: #6B7280;
    --color-gray-400: #9CA3AF;
    --color-gray-200: #E5E7EB;
    --color-gray-100: #F3F4F6;
    --color-gray-50: #F9FAF6;
    --color-red: #F74747;
    --main-white: #ffffff;
    --main-bg-color: var(--main-white);
    --main-text-color: var(--color-gray-800);
    --color-error: var(--color-red);
    --border-color: #DFDFDF;
    --img-logo: url("${ImgLogo}") no-repeat center/100%;
    --img-logo-text: url("${ImgLogoText}") no-repeat center/100%;
  }

  /* Font face */
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url(${PretendardRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: url(${PretendardMedium}) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src: url(${PretendardSemiBold}) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: url(${PretendardBold}) format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    src: url(${PretendardExtraBold}) format('woff');
  }

  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul, ol, li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  body {
    font-family: 'Pretendard', 'Apple SD Gothic Neo', '애플 SD 산돌고딕 Neo', 'Helvetica Neue', 'Roboto', 'sans-serif';
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
  }

  .blind {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
  }
`;

export default globalStyle;
