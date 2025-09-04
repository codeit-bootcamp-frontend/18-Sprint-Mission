import type { JSX, TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { inputPlaceholderStyle, inputStyle } from "./input-styles";

const StyledTextAreaInput = styled.div`
  ${inputStyle}

  textarea {
    ${inputStyle}
    height: 100%;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }
  textarea::placeholder {
    ${inputPlaceholderStyle}
  }
`;

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function TextAreaInput({ ...props }: Props): JSX.Element {
  return (
    <StyledTextAreaInput>
      <textarea {...props} />
    </StyledTextAreaInput>
  );
}

export default TextAreaInput;
