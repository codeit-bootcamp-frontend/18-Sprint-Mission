import type { InputHTMLAttributes, JSX } from "react";
import styled from "styled-components";
import TextInput from "./text-input";

const StyledFormInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
  }
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

function FormInput({ type, labelText, id, ...props }: Props): JSX.Element {
  return (
    <StyledFormInput>
      <label htmlFor={id}>{labelText}</label>
      <TextInput id={id} type={type} {...props} />
    </StyledFormInput>
  );
}

export default FormInput;
