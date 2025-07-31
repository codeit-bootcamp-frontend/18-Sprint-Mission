import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ disabled }) =>
    disabled ? "var(--color-cool-gray-400)" : "var(--color-primary-100)"};
  padding: 8px 23px;
  color: var(--color-cool-gray-100);
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  border-radius: 8px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
