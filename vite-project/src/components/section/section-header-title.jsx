import styled, { css } from "styled-components";
import SectionHeaderSize from "./section-header-size";

const headerTitleStyle = css`
  font-weight: 700;
  color: var(--color-secondary-900);
  margin: 0;

  @media (max-width: 767px) {
    line-height: 42px;
  }
`;

const StyledSectionHeaderTitleLarge = styled.h2`
  ${headerTitleStyle}
  font-size: 20px;
  line-height: 32px;
`;

const StyledSectionHeaderTitleSmall = styled.h3`
  ${headerTitleStyle}
  font-size: 18px;
  line-height: 26px;
`;

function SectionHeaderTitle({ size, children }) {
  switch (size) {
    case SectionHeaderSize.LARGE:
      return (
        <StyledSectionHeaderTitleLarge>
          {children}
        </StyledSectionHeaderTitleLarge>
      );
    case SectionHeaderSize.SMALL:
      return (
        <StyledSectionHeaderTitleSmall>
          {children}
        </StyledSectionHeaderTitleSmall>
      );
    default:
      return;
  }
}

export default SectionHeaderTitle;
