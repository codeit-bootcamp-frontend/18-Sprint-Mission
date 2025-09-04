import type { JSX } from "react";
import styled from "styled-components";
import largeLogo from "../../assets/logo-large.svg";
import smallLogo from "../../assets/logo-small.svg";
import { MediaQueryBreakpoint } from "../../utils/breakpoint";

const StyledNavLogo = styled.picture`
  margin-right: 32px;

  @media (max-width: 1199px) {
    margin-right: 20px;
  }

  @media (max-width: 767px) {
    margin-right: 0px;
  }
`;

function NavLogo(): JSX.Element {
  return (
    <StyledNavLogo>
      <source srcSet={smallLogo} media={MediaQueryBreakpoint.mobile} />
      <img src={largeLogo} />
    </StyledNavLogo>
  );
}

export default NavLogo;
