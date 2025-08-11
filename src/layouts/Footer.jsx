import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Container from "@/components/Container";
import { convertPxToRem } from "@/styles/utils/convert.utils";
import globalTheme from "@/styles/theme";
import Icon from "@/components/Icon";
const Flexbox = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  @media all and (max-width: 480px) {
    flex-wrap: wrap;
    gap: ${convertPxToRem(24)};
    & .txt-lg {
      order: 1;
    }
  }
`;
const FooterStyle = styled.footer`
  padding: ${convertPxToRem(32)} 0 ${convertPxToRem(108)};
  background-color: ${globalTheme.colors.gray900};
  @media all and (max-width: 375px) {
    padding: ${convertPxToRem(32)} 0 ${convertPxToRem(65)};
  }
`;
const FooterWrapper = styled(Container)`
  ${Flexbox}
`;
const InfoLinks = styled.div`
  ${Flexbox}
  gap: ${convertPxToRem(30)};
  & a {
    color: ${globalTheme.colors.gray200};
  }
`;
const SnsLinks = styled.div`
  ${Flexbox}
  gap: ${convertPxToRem(12)};
`;

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <FooterWrapper>
          <p className="txt-lg fc-gray400">© codeit - 2024</p>
          <InfoLinks>
            <Link to="/privacy" className="txt-lg">
              Privacy Policy
            </Link>
            <Link to="/faq" className="txt-lg">
              FAQ
            </Link>
          </InfoLinks>
          <SnsLinks>
            <Link
              to="https://www.facebook.com/?locale=ko_KR"
              target="_blank"
              aria-label="facebook으로 이동"
            >
              <Icon iconName="facebook" size="rg" color="white"></Icon>
            </Link>
            <Link
              href="https://x.com/login?lang=ko"
              target="_blank"
              aria-label="twitter로 이동"
            >
              <Icon iconName="twitter" size="rg" color="white"></Icon>
            </Link>
            <Link
              href="https://www.youtube.com/?app=desktop&hl=ko&gl=KR"
              target="_blank"
              aria-label="youtube로 이동"
            >
              <Icon iconName="youtube" size="rg" color="white"></Icon>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="instagram으로 이동"
            >
              <Icon iconName="instagram" size="rg" color="white"></Icon>
            </Link>
          </SnsLinks>
        </FooterWrapper>
      </FooterStyle>
    </>
  );
};
export default Footer;
