import { useMemo, useState, type ChangeEventHandler } from "react";
import { Link, NavLink } from "react-router-dom";
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
  max-width: 640px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media ${MediaQueryBreakpoint.tablet} {
    margin: 48px auto;
  }

  @media ${MediaQueryBreakpoint.mobile} {
    margin: 24px auto;
    gap: 24px;
  }
`;

const StyledSignUpPage = styled.main`
  @media ${MediaQueryBreakpoint.tablet} {
    padding: 0 56px;
  }

  @media ${MediaQueryBreakpoint.mobile} {
    padding: 0 24px;
    gap: 16px;
  }
`;

function SignUpPage() {
  const [inputValue, setInputValue] = useState<{
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }>({ email: "", username: "", password: "", confirmPassword: "" });

  const canSignUp = useMemo(() => {
    return (
      inputValue.email.trim() !== "" &&
      inputValue.username.trim() !== "" &&
      inputValue.password.trim() !== "" &&
      inputValue.confirmPassword.trim() !== "" &&
      inputValue.password === inputValue.confirmPassword
    );
  }, [inputValue]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <StyledSignUpPage>
      <Container>
        <Link to="/">
          <FormLogo />
        </Link>
        <Content>
          <LoginForm>
            <FormInput
              id="signup-email"
              type="email"
              name="email"
              labelText="이메일"
              placeholder="이메일을 입력해주세요"
              value={inputValue.email}
              onChange={handleInputChange}
            />
            <FormInput
              id="signup-username"
              name="username"
              labelText="닉네임"
              placeholder="닉네임을 입력해주세요"
              value={inputValue.username}
              onChange={handleInputChange}
            />
            <FormInput
              id="signup-password"
              type="password"
              name="password"
              labelText="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              value={inputValue.password}
              onChange={handleInputChange}
            />
            <FormInput
              id="signup-confirm-password"
              type="password"
              name="confirmPassword"
              labelText="비밀번호 확인"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              value={inputValue.confirmPassword}
              onChange={handleInputChange}
            />
            <Button
              size={ButtonSize.medium}
              shape={ButtonShape.pill}
              disabled={!canSignUp}
            >
              회원가입
            </Button>
          </LoginForm>
          <FormSocialLogin />
          <SignUpContainer>
            이미 회원이신가요? <NavLink to="/login">로그인</NavLink>
          </SignUpContainer>
        </Content>
      </Container>
    </StyledSignUpPage>
  );
}

export default SignUpPage;
