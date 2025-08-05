import styled from "styled-components";
import Input, { Label, InputWrapper } from "./Input";
import fontSize from "../styles/utils/fontSize.utils";
import { convertPxToRem } from "../styles/utils/convert.utils";
import globalTheme from "../styles/theme";
import Icon from "./Icon";
export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: ${convertPxToRem(24)};
`;
const ErrorMsg = styled.p`
  width: 100%;
  padding: ${convertPxToRem(8)} ${convertPxToRem(16)} 0;
  ${fontSize("txt-md")}
  font-weight: 600;
  color: ${globalTheme.colors.error};
`;
const FormField = ({ type, label, name, errorMsg, ...inputProps }) => {
  if (type === "password") {
    return (
      <div>
        <Label htmlFor={name}>{label}</Label>
        <InputWrapper>
          <Input id={name} name={name} {...inputProps}></Input>
          <button type="button" className="password-toggle">
            <Icon iconName="hide" size="md" color="coolGray600"></Icon>
          </button>
        </InputWrapper>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </div>
    );
  }
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} {...inputProps}></Input>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </div>
  );
};
export default FormField;
