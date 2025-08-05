import styled from "styled-components";
import Button from "../button/button";

const StyledSectionHeaderAction = styled(Button)`
  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

function SectionHeaderAction({ children, ...props }) {
  return (
    <StyledSectionHeaderAction {...props}>{children}</StyledSectionHeaderAction>
  );
}

export default SectionHeaderAction;
