import styled from "styled-components";
import { BUTTON_SIZE, BUTTON_TYPE } from "./button-styles";

function padding(buttonSize) {
  return buttonSize === BUTTON_SIZE.medium ? "11px 40px" : "8px 23px";
}

function fontSize(buttonSize) {
  return buttonSize === BUTTON_SIZE.medium ? 18 : 16;
}

function borderRadius(buttonType) {
  return buttonType === BUTTON_TYPE.round ? 8 : 24;
}

const StyledButton = styled.button`
  display: flex;
  gap: 8px;
  background-color: var(--color-primary-100);
  padding: ${({ $size }) => padding($size)};
  color: var(--color-cool-gray-100);
  font-size: ${({ $size }) => fontSize($size)}px;
  font-weight: 600;
  line-height: 26px;
  border-radius: ${({ $type }) => borderRadius($type)}px;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: var(--color-cool-gray-400);
    cursor: default;
  }
`;

function Button({
  children,
  size = BUTTON_SIZE.small,
  type = BUTTON_TYPE.round,
  ...props
}) {
  return (
    <StyledButton $size={size} $type={type} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
