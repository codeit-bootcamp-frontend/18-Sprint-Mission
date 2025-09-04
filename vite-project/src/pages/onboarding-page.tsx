import type { JSX } from "react";
import FooterSection from "../features/onboarding/components/footer-section";
import HeaderSection from "../features/onboarding/components/header-section";
import OnboardingPageFooter from "../features/onboarding/components/onboarding-page-footer";

function OnboardingPage(): JSX.Element {
  return (
    <>
      <HeaderSection />
      <div style={{ height: "20px" }} />
      <FooterSection />
      <OnboardingPageFooter />
    </>
  );
}

export default OnboardingPage;
