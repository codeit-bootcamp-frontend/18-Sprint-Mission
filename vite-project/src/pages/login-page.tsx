import { useMemo, useState, type ChangeEventHandler } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/button/button";
import { ButtonShape, ButtonSize } from "../components/button/button-styles";
import FormInput from "../components/input/form-input";
import FormLogo from "../components/logo/form-logo";
import FormSocialLogin from "../components/social/form-social-login";
import { MediaQueryBreakpoint } from "../utils/breakpoint";

const SignUpContainer = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-secondary-800);

  a {
    color: var(--color-primary-100);
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Container = styled.div`
  width: 640px;
  margin: 230px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media ${MediaQueryBreakpoint.tablet} {
    margin-top: 190px;
  }

  @media ${MediaQueryBreakpoint.mobile} {
    margin-top: 80px;
    gap: 24px;
  }
`;

function LoginPage() {
  const [inputValue, setInputValue] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const canLogin = useMemo(() => {
    return inputValue.email.trim() !== "" && inputValue.password.trim() !== "";
  }, [inputValue]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main>
      <Container>
        <FormLogo />
        <Content>
          <LoginForm>
            <FormInput
              id="login-email"
              name="email"
              labelText="이메일"
              placeholder="이메일을 입력해주세요"
              value={inputValue.email}
              onChange={handleInputChange}
            />
            <FormInput
              id="login-password"
              name="password"
              labelText="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              value={inputValue.password}
              onChange={handleInputChange}
            />
            <Button
              size={ButtonSize.medium}
              shape={ButtonShape.pill}
              disabled={!canLogin}
            >
              로그인
            </Button>
          </LoginForm>
          <FormSocialLogin />
          <SignUpContainer>
            판다마켓이 처음이신가요? <NavLink to="/signup">회원가입</NavLink>
          </SignUpContainer>
        </Content>
      </Container>
    </main>
  );
}

export default LoginPage;
