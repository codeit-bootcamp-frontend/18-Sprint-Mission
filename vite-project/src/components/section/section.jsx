import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ $spacing }) => $spacing}px;

  @media (max-width: 767px) {
    gap: 16px;
  }
`;

function Section({ children, spacing = 16 }) {
  return <StyledSection $spacing={spacing}>{children}</StyledSection>;
}

export default Section;
