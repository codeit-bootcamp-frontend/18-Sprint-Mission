import { styled, css } from "styled-components";
import typography from "@/styles/utils/typography";
import Icon from "@/components/Icon";

const BUTTON_STATE_STYLES = {
  primary: css`
    color: var(--main-white);
    background: var(--color-primary-100);
    &:active {
      background: var(--color-primary-300);
    }
    &:hover {
      background: var(--color-primary-200);
    }
    &:disabled {
      background: var(--color-gray-400);
      pointer-events: none;
    }
  `,
  secondary: css`
    background: var(--main-white);
    color: var(--color-primary-100);
    border: 1px solid var(--color-primary-100);
  `,
  tertiary: css`
    background: var(--main-white);
    color: var(--color-gray-500);
    border: 1px solid var(--border-color);
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  `,
};

const BUTTON_SHAPE_STYLES = {
  lg: css`
    height: 56px;
    border-radius: 50%;
    width: 100%;
    ${typography["text-xl-semibold"]},
  `,
  md: css`
    height: 48px;
    border-radius: 50%;
    width: 100%;
    max-width: 240px;
    ${typography["text-2lg-semibold"]},
  `,
  xs: css`
    height: 40px;
    border-radius: 50%;
    width: auto,
    padding: 4px 12px;
    ${typography["text-lg-semibold"]},
  `,
  sm42: css`
    height: 42px;
    border-radius: 8px;
    width: auto;
    padding: 8px 23px;
    ${typography["text-lg-semibold"]},
  `,
  sm48: css`
    height: 48px;
    border-radius: 8px;
    width: auto;
    padding: 11px 30px;
    ${typography["text-lg-semibold"]},
  `,
  round40: css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    ${typography["text-lg-semibold"]},
  `,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  ${props => BUTTON_SHAPE_STYLES[props.$shape || "md"]};
  ${props => BUTTON_STATE_STYLES[props.$appearance || "primary"]};
  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
    `}
`;

const Button = ({ shape = "md", appearance = "primary", icon, disabled = false, children, ...props }) => {
  return (
    <StyledButton $shape={shape} $appearance={appearance} disabled={disabled} {...props}>
      {children}
      {icon && <Icon src={icon} alt="" />}
    </StyledButton>
  );
};

export default Button;
