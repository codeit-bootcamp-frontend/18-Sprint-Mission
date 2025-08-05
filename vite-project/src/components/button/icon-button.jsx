import styled from "styled-components";

const StyledIconButton = styled.button`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

function IconButton({ className, src, size = 24 }) {
  return (
    <StyledIconButton className={className} $size={size}>
      <img src={src} />
    </StyledIconButton>
  );
}

export default IconButton;
