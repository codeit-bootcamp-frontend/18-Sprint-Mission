import type { JSX } from "react";
import styled from "styled-components";
import { MediaQueryBreakpoint } from "../../../utils/breakpoint";

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
`;

const StyledHeaderFooterSection = styled.section`
  background-color: #cfe5ff;
  height: 540px;
  display: flex;
  align-items: flex-end;

  @media ${MediaQueryBreakpoint.tablet} {
    height: 771px;
    align-items: stretch;
  }

  @media ${MediaQueryBreakpoint.mobile} {
    height: 540px;
  }
`;

interface Props {
  children: React.ReactNode;
}

function HeaderFooterSection({ children }: Props): JSX.Element {
  return (
    <StyledHeaderFooterSection>
      <Content>{children}</Content>
    </StyledHeaderFooterSection>
  );
}

export default HeaderFooterSection;
