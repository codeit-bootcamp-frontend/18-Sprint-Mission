import styled, { css } from "styled-components";
import globalTheme from "../styles/theme";
import iconStyle from "../styles/utils/icon.utils";
import { convertPxToRem } from "../styles/utils/convert.utils";
const ICON_SIZES = {
  sm: convertPxToRem(16),
  rg: convertPxToRem(20),
  md: convertPxToRem(24),
  lg: convertPxToRem(32),
  xl: convertPxToRem(40),
};

const getSizeStyle = (size = "md") => {
  const icSize = ICON_SIZES[size];
  return css`
    width: ${icSize};
    height: ${icSize};
  `;
};

const Icon = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  background-color: ${({ color = "gray900" }) => globalTheme.colors?.[color]};
  ${({ size }) => getSizeStyle(size)}
  ${({ iconName }) => iconStyle(iconName)}
`;
export default Icon;
