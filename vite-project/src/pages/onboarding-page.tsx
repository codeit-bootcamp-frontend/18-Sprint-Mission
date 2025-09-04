import type { JSX } from "react";
import styled from "styled-components";
import FooterSection from "../features/onboarding/components/footer-section";
import HeaderSection from "../features/onboarding/components/header-section";

const StyledOnboardingPage = styled.div``;

function OnboardingPage(): JSX.Element {
  return (
    <StyledOnboardingPage>
      <HeaderSection />
      <div style={{ height: "20px" }} />
      <FooterSection />
    </StyledOnboardingPage>
  );
}

export default OnboardingPage;
