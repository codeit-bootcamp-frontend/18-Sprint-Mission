import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import { ButtonSize } from "../button/button-styles";
import NavLogo from "../logo/nav-logo";
import NavBar from "./nav-bar";

function OnboardingNavBar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <NavBar>
      <NavLogo />
      <Button size={ButtonSize.medium} onClick={handleLoginClick}>
        로그인
      </Button>
    </NavBar>
  );
}

export default OnboardingNavBar;
