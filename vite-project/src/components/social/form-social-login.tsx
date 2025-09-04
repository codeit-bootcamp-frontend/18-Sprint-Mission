import type { JSX } from "react";
import { styled } from "styled-components";
import SocialLoginButton from "../button/social-login-button";
import { SocialLogin } from "./social-login";

const StyledFormSocialLogin = styled.div`
  background-color: #e6f2ff;
  border-radius: 8px;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 500;
    line-height: 26px;
    color: var(--color-secondary-800);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 16px;
  }
`;

function FormSocialLogin(): JSX.Element {
  return (
    <StyledFormSocialLogin>
      <span>간편 로그인하기</span>
      <ul>
        <li>
          <SocialLoginButton socialLogin={SocialLogin.kakaotalk} />
        </li>
        <li>
          <SocialLoginButton socialLogin={SocialLogin.google} />
        </li>
      </ul>
    </StyledFormSocialLogin>
  );
}

export default FormSocialLogin;
