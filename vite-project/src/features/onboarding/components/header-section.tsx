import type { JSX } from "react";
import styled from "styled-components";
import landingImageTop from "../../../assets/landing-image_top.png";
import Button from "../../../components/button/button";
import {
  ButtonShape,
  ButtonSize,
} from "../../../components/button/button-styles";
import { MediaQueryBreakpoint } from "../../../utils/breakpoint";
import HeaderFooterSection from "./header-footer-section";
import OnboardingTitle from "./onboarding-title";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-grow: 1;
  padding-bottom: 60px;
`;

const StyledHeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 340px;
  }

  @media ${MediaQueryBreakpoint.tablet} {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    gap: 0px;
  }

  @media ${MediaQueryBreakpoint.mobile} {
    img {
      height: 204px;
    }
  }
`;

function HeaderSection(): JSX.Element {
  return (
    <HeaderFooterSection>
      <StyledHeaderSection>
        <TitleContainer>
          <OnboardingTitle>
            일상의 모든 물건을
            <br />
            거래해 보세요
          </OnboardingTitle>
          <Button size={ButtonSize.medium} shape={ButtonShape.pill}>
            구경하러 가기
          </Button>
        </TitleContainer>
        <img src={landingImageTop} />
      </StyledHeaderSection>
    </HeaderFooterSection>
  );
}

export default HeaderSection;
