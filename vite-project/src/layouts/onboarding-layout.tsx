import type { JSX } from "react";
import OnboardingNavBar from "../components/nav/onboarding-nav-bar";

interface Props {
  children: React.ReactNode;
}

function OnboardingLayout({ children }: Props): JSX.Element {
  return (
    <>
      <OnboardingNavBar />
      {children}
    </>
  );
}

export default OnboardingLayout;
