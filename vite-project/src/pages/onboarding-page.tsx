import type { JSX } from "react";
import ContentSection from "../features/onboarding/components/content-section";
import FooterSection from "../features/onboarding/components/footer-section";
import HeaderSection from "../features/onboarding/components/header-section";
import OnboardingPageFooter from "../features/onboarding/components/onboarding-page-footer";
import { OnboardingContent } from "../features/onboarding/models/onboarding-content";

function OnboardingPage(): JSX.Element {
  return (
    <>
      <HeaderSection />
      <ContentSection content={OnboardingContent.hotItem} />
      <ContentSection content={OnboardingContent.search} reverse />
      <ContentSection content={OnboardingContent.register} />
      <FooterSection />
      <OnboardingPageFooter />
    </>
  );
}

export default OnboardingPage;
