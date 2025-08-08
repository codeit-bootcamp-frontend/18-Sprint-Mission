import styled from "styled-components";
import Input, { Label, InputWrapper } from "@/components/Form/Input";
import Icon from "@/components/Icon";
import fontSize from "@/styles/utils/fontSize.utils";
import { convertPxToRem } from "@/styles/utils/convert.utils";
import globalTheme from "@/styles/theme";
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
const PasswordToggle = styled.button`
  right: ${convertPxToRem(24)};
`;

/**
 * 비밀번호 표시/숨기기 토글 버튼 컴포넌트
 *
 * @param {{
 *   isShowPassword: boolean, // 비밀번호 표시 상태
 *   onTogglePassword: () => void // 토글 함수
 * }} props
 * @returns {JSX.Element}
 */
const PasswordToggleButton = ({ isShowPassword, onTogglePassword }) => {
  return (
    <PasswordToggle
      type="button"
      className="input-icon"
      aria-label={isShowPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
      onClick={onTogglePassword}
    >
      <Icon
        iconName={isShowPassword ? "show" : "hide"}
        size="md"
        color="coolGray600"
      />
    </PasswordToggle>
  );
};
const FormField = ({
  type = "text",
  label,
  name,
  errorMsg,
  showPassword,
  onTogglePassword,
  ...inputProps
}) => {
  const inputChangeType = type === "password" && showPassword ? "text" : type;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <InputWrapper>
        <Input
          type={inputChangeType}
          id={name}
          name={name}
          {...inputProps}
        ></Input>
        {type === "password" && (
          <PasswordToggleButton
            showPassword={showPassword}
            onTogglePassword={onTogglePassword}
          ></PasswordToggleButton>
        )}
      </InputWrapper>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </div>
  );
};
export default FormField;
