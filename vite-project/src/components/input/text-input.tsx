import type { InputHTMLAttributes, JSX } from "react";
import styled from "styled-components";
import {
  inputPlaceholderStyle,
  inputStyle,
  inputTextStyle,
} from "./input-styles";

const StyledTextInput = styled.div`
  ${inputStyle}

  input {
    ${inputTextStyle}
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    ${inputPlaceholderStyle}
  }
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  trailingIcon?: string;
}

function TextInput({ type = "text", ...props }: Props): JSX.Element {
  return (
    <StyledTextInput>
      <input type={type} {...props} />
    </StyledTextInput>
  );
}

export default TextInput;
