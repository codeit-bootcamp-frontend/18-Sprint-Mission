import styled from "styled-components";
import SectionHeaderSize from "./section-header-size";
import SectionHeaderTitle from "./section-header-title";

const StyledSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    position: relative;
  }
`;

const StyledSectionHeaderActions = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 767px) {
    width: 100%;
    gap: 14px;

    button:nth-child(2) {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

function SectionHeader({ children, title, size = SectionHeaderSize.LARGE }) {
  return (
    <StyledSectionHeader>
      {title && <SectionHeaderTitle size={size}>{title}</SectionHeaderTitle>}
      {children && (
        <StyledSectionHeaderActions>{children}</StyledSectionHeaderActions>
      )}
    </StyledSectionHeader>
  );
}

export default SectionHeader;
