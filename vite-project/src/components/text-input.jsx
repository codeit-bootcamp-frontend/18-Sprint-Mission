import styled, { css } from "styled-components";

const textStyle = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

const inputStyle = css`
  ${textStyle}
  width: 100%;
  border: none;
  background: none;
  padding: 0;
  color: var(--color-secondary-800);
`;

const inputPlaceholderStyle = css`
  color: var(--color-secondary-400);
  ${textStyle}
`;

const StyledTextInput = styled.div`
  background-color: var(--color-secondary-100);
  padding: 16px 24px;
  border-radius: 12px;
  ${({ $multiline }) => ($multiline ? "height: 282px;" : "")}

  input {
    ${inputStyle}
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    ${inputPlaceholderStyle}
  }

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

function TextInput({ placeholder, multiline = false }) {
  return (
    <StyledTextInput $multiline={multiline}>
      {multiline ? (
        <textarea placeholder={placeholder} />
      ) : (
        <input placeholder={placeholder} />
      )}
    </StyledTextInput>
  );
}

export default TextInput;
