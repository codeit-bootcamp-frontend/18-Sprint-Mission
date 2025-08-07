import styled from "styled-components";
import Avatar from "../avatar/avatar";
import { USER_PROFILE_CARD_SIZE } from "./user-profile-card-size";

function infoGap(cardSize) {
  return cardSize === USER_PROFILE_CARD_SIZE.large ? 2 : 4;
}

function fontSize(cardSize) {
  return cardSize === USER_PROFILE_CARD_SIZE.large ? 14 : 12;
}

function lineHeight(cardSize) {
  return cardSize === USER_PROFILE_CARD_SIZE.large ? 24 : 18;
}

function cardGap(cardSize) {
  return cardSize === USER_PROFILE_CARD_SIZE.large ? 16 : 8;
}

function avatarSize(cardSize) {
  return cardSize === USER_PROFILE_CARD_SIZE.large ? 40 : 32;
}

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $size }) => infoGap($size)}px;

  span {
    font-size: ${({ $size }) => fontSize($size)}px;
    line-height: ${({ $size }) => lineHeight($size)}px;
  }

  span:first-child {
    font-weight: 500;
    color: var(--color-secondary-600);
  }

  span:last-child {
    color: var(--color-cool-gray-400);
  }
`;

const StyledUserProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ $size }) => cardGap($size)}px;

  ${ProfileInfo} {
    flex-grow: 1;
  }
`;

function UserProfileCard({
  imageUrl,
  name,
  status,
  size = USER_PROFILE_CARD_SIZE.large,
}) {
  return (
    <StyledUserProfileCard $size={size}>
      <Avatar imageUrl={imageUrl} size={avatarSize(size)} />
      <ProfileInfo $size={size}>
        <span>{name}</span>
        <span>{status}</span>
      </ProfileInfo>
    </StyledUserProfileCard>
  );
}

export default UserProfileCard;
