import styled from "styled-components";
const Button = styled.button`
  display: inline-flex;
  width: fit-content;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-weight: 600;
  border-radius: ${({ round }) => (round ? `40px` : `8px`)};
  &:disabled {
    box-shadow: none;
    background-color: $gray400;
    color: $gray100;
    pointer-events: none;
  }
  ${({ icon }) => `width:100%`}
  ${({ full }) => `gap: 4px;`}
  ${({ bgStyle }) => `gap: 4px;`}
  ${({ bdStyle }) => `gap: 4px;`}
`;

export default Button;
