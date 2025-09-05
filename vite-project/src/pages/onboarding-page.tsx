import type { JSX } from "react";
import styled from "styled-components";
import ContentSection from "../features/onboarding/components/content-section";
import FooterSection from "../features/onboarding/components/footer-section";
import HeaderSection from "../features/onboarding/components/header-section";
import OnboardingPageFooter from "../features/onboarding/components/onboarding-page-footer";
import { OnboardingContent } from "../features/onboarding/models/onboarding-content";
import { MediaQueryBreakpoint } from "../utils/breakpoint";

const StyledOnboardingPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 138px;

  @media ${MediaQueryBreakpoint.tablet} {
    gap: 56px;
  }

  @media (${MediaQueryBreakpoint.mobile}) {
    gap: 83px;
  }
`;

function OnboardingPage(): JSX.Element {
  return (
    <StyledOnboardingPage>
      <div>
        <HeaderSection />
        <ContentSection content={OnboardingContent.hotItem} />
        <ContentSection content={OnboardingContent.search} reverse />
        <ContentSection content={OnboardingContent.register} />
        <FooterSection />
      </div>
      <OnboardingPageFooter />
    </StyledOnboardingPage>
  );
}

export default OnboardingPage;
