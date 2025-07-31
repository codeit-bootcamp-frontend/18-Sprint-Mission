import styled from "styled-components";
import Button from "../Button";

const StyledSectionHeaderAction = styled(Button)`
  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

function SectionHeaderAction({ children, onClick }) {
  return (
    <StyledSectionHeaderAction onClick={onClick}>
      {children}
    </StyledSectionHeaderAction>
  );
}

export default SectionHeaderAction;
