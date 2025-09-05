import type { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { ButtonShape, ButtonSize } from "./button-styles";

const BUTTON_STYLE = {
  [ButtonSize.medium]: {
    padding: "11px 40px",
    fontSize: 18,
  },
  [ButtonSize.small]: {
    padding: "8px 23px",
    fontSize: 16,
  },
  [ButtonShape.round]: {
    borderRadius: 8,
  },
  [ButtonShape.pill]: {
    borderRadius: 24,
  },
};

const StyledButton = styled.button<{ $size: ButtonSize; $shape: ButtonShape }>`
  display: flex;
  justify-content: center;
  gap: 8px;
  background-color: var(--color-primary-100);
  padding: ${({ $size }) => BUTTON_STYLE[$size].padding};
  color: var(--color-cool-gray-100);
  font-size: ${({ $size }) => BUTTON_STYLE[$size].fontSize}px;
  font-weight: 600;
  line-height: 26px;
  border-radius: ${({ $shape }) => BUTTON_STYLE[$shape].borderRadius}px;
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

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  shape?: ButtonShape;
  children: React.ReactNode;
}

function Button({
  children,
  size = ButtonSize.small,
  shape = ButtonShape.round,
  ...props
}: Props) {
  return (
    <StyledButton $size={size} $shape={shape} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
