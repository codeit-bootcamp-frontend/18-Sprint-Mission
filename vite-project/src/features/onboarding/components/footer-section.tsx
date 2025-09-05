import type { JSX } from "react";
import styled from "styled-components";
import landingImageBottom from "../../../assets/landing-image-bottom.png";
import { MediaQueryBreakpoint } from "../../../utils/breakpoint";
import HeaderFooterSection from "./header-footer-section";
import OnboardingTitle from "./onboarding-title";

const TitleContainer = styled.div`
  padding-bottom: 30px;
  flex-grow: 1;
`;

const StyledFooterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 397px;
  }

  @media ${MediaQueryBreakpoint.tablet} {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    gap: 0px;
  }

  @media ${MediaQueryBreakpoint.mobile} {
    img {
      height: 198px;
    }
  }
`;

function FooterSection(): JSX.Element {
  return (
    <HeaderFooterSection>
      <StyledFooterSection>
        <TitleContainer>
          <OnboardingTitle>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </OnboardingTitle>
        </TitleContainer>
        <img src={landingImageBottom} />
      </StyledFooterSection>
    </HeaderFooterSection>
  );
}

export default FooterSection;
