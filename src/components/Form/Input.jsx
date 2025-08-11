import styled from "styled-components";
import globalTheme from "@/styles/theme";
import fontSize from "@/styles/utils/fontSize.utils";
import { convertPxToRem } from "@/styles/utils/convert.utils";

export const Label = styled.label`
  display: block;
  margin-bottom: ${convertPxToRem(8)};
  font-weight: 700;
  ${fontSize("txt-2lg")}
`;
export const InputWrapper = styled.div`
  position: relative;
  & .input-icon {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
`;
export const InputStyled = styled.input`
  display: block;
  width: 100%;
  border-radius: ${convertPxToRem(12)};
  background-color: ${globalTheme.colors.coolGray100};
  box-shadow: inset 0 0 0 1px
    ${({ error }) => (error ? globalTheme.colors.error : "transparent")};
  ${fontSize("txt-lg")}
  &::placeholder {
    color: ${globalTheme.colors.gray400};
  }
  ${({ error }) =>
    !error &&
    `&:focus{box-shadow: inset 0 0 0 1px ${globalTheme.colors.primary100}}`}
`;
export const SearchInput = styled(InputStyled)`
  padding: ${convertPxToRem(9)} ${convertPxToRem(16)};
  padding-left: ${convertPxToRem(44)};
`;
const Input = styled(InputStyled)`
  padding: ${convertPxToRem(16)} ${convertPxToRem(24)};
`;
export default Input;
