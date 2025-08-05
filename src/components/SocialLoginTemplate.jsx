import styled from "styled-components";
import { Link } from "react-router-dom";
import { convertPxToRem, convertPxToVw } from "../styles/utils/convert.utils";
import { ButtonGroup } from "./Button";
import Icon from "./Icon";
const SocialLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${convertPxToRem(16)} ${convertPxToRem(24)};
  border-radius: ${convertPxToRem(8)};
  background-color: #e6f2ff;
  @media all and (max-width: 375px) {
  }
`;
const ButtonWrapper = styled(ButtonGroup)`
  gap: ${convertPxToRem(16)};
`;

const SocialLoginTemplate = () => {
  return (
    <SocialLogin>
      <p className="txt-lg font-weight-500">간편 로그인 하기</p>
      <ButtonWrapper>
        <Link
          to="https://www.google.com/"
          target="_blank"
          aria-label="구글로 로그인하기"
        >
          <Icon size="lg" iconName="google"></Icon>
        </Link>
        <Link
          to="https://www.kakaocorp.com/page/"
          target="_blank"
          aria-label="카카오로 로그인하기"
        >
          <Icon size="lg" iconName="kakao"></Icon>
        </Link>
      </ButtonWrapper>
    </SocialLogin>
  );
};
export default SocialLoginTemplate;
