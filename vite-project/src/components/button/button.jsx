import styled from "styled-components";
import { BUTTON_SIZE, BUTTON_TYPE } from "./button-styles";

const BUTTON_STYLE = {
  [BUTTON_SIZE.medium]: {
    padding: "11px 40px",
    fontSize: 18,
  },
  [BUTTON_SIZE.small]: {
    padding: "8px 23px",
    fontSize: 16,
  },
  [BUTTON_TYPE.round]: {
    borderRadius: 8,
  },
  [BUTTON_TYPE.pill]: {
    borderRadius: 24,
  },
};

const StyledButton = styled.button`
  display: flex;
  gap: 8px;
  background-color: var(--color-primary-100);
  padding: ${({ $size }) => BUTTON_STYLE[$size].padding};
  color: var(--color-cool-gray-100);
  font-size: ${({ $size }) => BUTTON_STYLE[$size].fontSize}px;
  font-weight: 600;
  line-height: 26px;
  border-radius: ${({ $type }) => BUTTON_STYLE[$type].borderRadius}px;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: var(--color-cool-gray-400);
    cursor: default;
  }

  &:hover:not(:disabled) {
    opacity: 0.5;
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
