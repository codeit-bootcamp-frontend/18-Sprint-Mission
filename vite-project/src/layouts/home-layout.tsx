import type { JSX } from "react";
import styled from "styled-components";
import HomeNavBar from "../components/nav/home-nav-bar";
import { MediaQueryBreakpoint } from "../utils/breakpoint";

const Content = styled.div`
  max-width: 1200px;
  margin: 24px auto 0px;

  @media ${MediaQueryBreakpoint.tablet} {
    max-width: none;
    margin: 24px 24px 0px;
  }

  @media ${MediaQueryBreakpoint.mobile} {
    max-width: none;
    margin: 16px 16px 0px;
  }
`;

interface Props {
  children: React.ReactNode;
}

function HomeLayout({ children }: Props): JSX.Element {
  return (
    <>
      <HomeNavBar />
      <Content>{children}</Content>
    </>
  );
}

export default HomeLayout;
