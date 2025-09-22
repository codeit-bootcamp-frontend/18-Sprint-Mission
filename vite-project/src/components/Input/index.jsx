import useToggle from "@/hooks/useToggle";
import { styled, css } from "styled-components";
import Icon from "../Icon";
import typography from "@/styles/utils/typography";

const INPUT_VARIANT_STYLES = {
  primary: css`
    height: 56px;
    padding: 0 24px;
    .icon-align-left & {
      padding-left: 70px;
    }
    .icon-align-right & {
      padding-right: 70px;
    }
  `,
  secondary: css`
    height: 42px;
    padding: 0 16px;
    .icon-align-left & {
      padding-left: 44px;
    }
    .icon-align-right & {
      padding-right: 44px;
    }
  `,
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  ${props => INPUT_VARIANT_STYLES[props.$appearance || "primary"]}
  background-color: var( --color-gray-100);
  border: none;
  border-radius: 12px;
  color: var(--color-gray-800);
  ${typography["text-lg-regular"]}
  box-sizing: border-box;
  &::placeholder {
    color: var(--color-gray-400);
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--color-gray-100) inset;
  }
  &:focus {
    outline: 1px solid var(--color-primary-100);
  }
  .error & {
    outline: 1px solid var(--color-error);
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  cursor: pointer;
  z-index: 2;
  img {
    display: block;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  background-color: var(--color-gray-100);
  z-index: 2;
  .icon-align-right & {
    left: auto;
    right: 16px;
  }
`;

const ErrorMsg = styled.p`
  color: var(--color-error);
  margin-top: 8px;
  padding: 0 16px;
  ${typography["text-md-semibold"]}
`;

const Input = ({ type = "text", error, icon, iconAlign = "left", appearance = "primary", className, ...rest }) => {
  const [isToggled, { toggle }] = useToggle(false);
  const isPasswordType = type === "password";
  const inputType = isPasswordType ? (isToggled ? "text" : "password") : type;

  const finalIconAlign = isPasswordType ? "right" : iconAlign;

  return (
    <>
      <InputWrapper className={`${className ?? ""} ${error ? "error" : ""} icon-align-${finalIconAlign}`}>
        <StyledInput type={inputType} $appearance={appearance} {...rest} />
        {isPasswordType && (
          <ToggleButton onClick={toggle}>
            <Icon icon={isToggled ? "eye" : "eyeOff"} />
          </ToggleButton>
        )}
        {icon && <StyledIcon icon={icon} />}
      </InputWrapper>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </>
  );
};

export default Input;
