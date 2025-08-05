import { css } from "styled-components";
import globalTheme from "../theme";
import { convertPxToRem, convertPxToVw, convertLineHeightToPercent } from "./convert.utils";

// 버튼 컴포넌트에서 사용될 util 함수 및 변수 선언
export const BUTTON_SIZE = {
  xs: {
    padding: convertPxToRem(8),
    ...globalTheme.fonts["txt-lg"],
  },
  sm: {
    padding: convertPxToRem(11),
    ...globalTheme.fonts["txt-lg"],
  },
  md: {
    padding: convertPxToRem(11),
    ...globalTheme.fonts["txt-2lg"],
  },
  lg: {
    padding: convertPxToRem(12),
    ...globalTheme.fonts["txt-xl"],
  },
};
export const ICON_BUTTON_SIZE = {
  sm: convertPxToRem(4),
  md: convertPxToRem(9),
};
export const buttonSize = css`
  ${({ size, onlyIcon }) => {
    if (onlyIcon) {
      return css`
        padding: ${ICON_BUTTON_SIZE[size] ?? ICON_BUTTON_SIZE["sm"]};
        line-height: 0;
      `;
    }
    const currentSize = BUTTON_SIZE[size] ?? BUTTON_SIZE["lg"];
    return css`
      padding: ${currentSize.padding};
      font-size: ${convertPxToRem(currentSize.fontSize)};
      line-height: ${convertLineHeightToPercent(currentSize.lineHeight, currentSize.fontSize)};
    `;
  }}
`;
export const buttonStyle = css`
  border-radius: ${({ round }) => (round ? `9999px` : convertPxToRem(8))};
  ${({ btnStyle }) => {
    if (btnStyle === "line") {
      return css`
        box-shadow: inset 0 0 0 1px ${globalTheme.colors.primary100};
        background-color: ${globalTheme.colors.coolGray50};
        color: ${globalTheme.colors.primary100};
        &:hover {
          background-color: ${globalTheme.colors.coolGray100};
        }
        &:active {
          box-shadow: inset 0 0 0 2px ${globalTheme.colors.primary100};
        }
      `;
    }
    return css`
      background-color: ${globalTheme.colors.primary100};
      color: ${globalTheme.colors.coolGray100};
      &:hover {
        background-color: ${globalTheme.colors.primary200};
      }
      &:active {
        background-color: ${globalTheme.colors.primary300};
      }
    `;
  }}
`;
export const buttonResponsive = css`
  @media all and (max-width: 744px) {
    ${({ size = "lg" }) => {
      const currentSize = BUTTON_SIZE[size];
      if (currentSize.minClamp) {
        return css`
          font-size: clamp(
            ${convertPxToRem(currentSize.minClamp)},
            ${convertPxToVw(currentSize.valClamp)},
            ${convertPxToRem(currentSize.valClamp)}
          );
        `;
      }
      return css`
        font-size: ${convertPxToRem(currentSize.valClamp)};
      `;
    }}
  }
`;
