import type { JSX } from "react";
import styled from "styled-components";

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavBar = styled.nav`
  border-bottom: 1px solid #dfdfdf;
  background-color: white;

  @media (max-width: 1199px) {
    padding: 0 24px;
  }

  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

interface Props {
  children: React.ReactNode;
}

function NavBar({ children }: Props): JSX.Element {
  return (
    <StyledNavBar>
      <Content>{children}</Content>
    </StyledNavBar>
  );
}

export default NavBar;
