import styled, { css } from "styled-components";
import globalTheme from "@/styles/theme";
import { convertPxToRem } from "@/styles/utils/convert.utils";
import {
  buttonSize,
  buttonStyle,
  buttonResponsive,
} from "@/styles/utils/button.utils";
export const ButtonGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: ${convertPxToRem(8)};
`;
const Button = styled.button`
  width: ${({ full }) => (full ? `100%` : `fit-content`)};
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-weight: 600;
  ${({ icon }) => {
    if (icon) {
      return css`
        gap: ${convertPxToRem(4)};
      `;
    }
  }}
  ${buttonSize}
  ${buttonStyle}
  &:disabled ,
  &.disabled {
    box-shadow: none;
    background-color: ${globalTheme.colors.gray400};
    color: ${globalTheme.colors.gray100};
    pointer-events: none;
  }
  ${buttonResponsive}
`;

export default Button;
