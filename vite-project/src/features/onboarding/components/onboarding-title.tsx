import styled from "styled-components";
import { MediaQueryBreakpoint } from "../../../utils/breakpoint";

const OnboardingTitle = styled.h2`
  margin: 0;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.4;

  @media ${MediaQueryBreakpoint.tablet} {
    text-align: center;
    margin-top: 84px;
  }

  @media ${MediaQueryBreakpoint.mobile} {
    font-size: 32px;
    margin-top: 60px;
  }
`;

export default OnboardingTitle;
