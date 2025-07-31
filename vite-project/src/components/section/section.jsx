import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

export default Section;
