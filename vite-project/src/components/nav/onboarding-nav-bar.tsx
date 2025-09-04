import Button from "../button/button";
import { ButtonSize } from "../button/button-styles";
import NavLogo from "../logo/nav-logo";
import NavBar from "./nav-bar";

function OnboardingNavBar() {
  return (
    <NavBar>
      <NavLogo />
      <Button size={ButtonSize.medium}>로그인</Button>
    </NavBar>
  );
}

export default OnboardingNavBar;
