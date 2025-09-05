import type { JSX } from "react";
import styled from "styled-components";
import defaultImg from "../../assets/profile-default.svg";

const StyledAvatar = styled.div<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20;
  }
`;

const DEFAULT_SIZE = 40;

interface Props {
  imageUrl?: string;
  size?: number;
}

function Avatar({ imageUrl, size = DEFAULT_SIZE }: Props): JSX.Element {
  return (
    <StyledAvatar $size={size}>
      <img src={imageUrl || defaultImg} alt="프로필 사진" />
    </StyledAvatar>
  );
}

export default Avatar;
