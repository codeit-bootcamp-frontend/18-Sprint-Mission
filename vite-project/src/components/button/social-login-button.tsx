import type { JSX } from "react/jsx-dev-runtime";
import { styled } from "styled-components";
import type { SocialLoginType } from "../social/social-login";

const StyledSocialLoginButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

interface Props {
  socialLogin: SocialLoginType;
}

function SocialLoginButton({ socialLogin }: Props): JSX.Element {
  return (
    <StyledSocialLoginButton>
      <img src={socialLogin.image} alt={socialLogin.name} />
    </StyledSocialLoginButton>
  );
}

export default SocialLoginButton;
