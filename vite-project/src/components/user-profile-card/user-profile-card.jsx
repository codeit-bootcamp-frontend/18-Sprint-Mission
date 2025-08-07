import styled from "styled-components";
import Avatar from "../avatar/avatar";
import USER_PROFILE_CARD_SIZE from "./user-profile-card-size";

const PROFILE_INFO_STYLE = {
  [USER_PROFILE_CARD_SIZE.large]: {
    infoGap: 2,
    fontSize: 14,
    lineHeight: 24,
    cardGap: 16,
    avatarSize: 40,
  },
  [USER_PROFILE_CARD_SIZE.small]: {
    infoGap: 4,
    fontSize: 12,
    lineHeight: 18,
    cardGap: 8,
    avatarSize: 32,
  },
};

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $size }) => PROFILE_INFO_STYLE[$size].infoGap}px;

  span {
    font-size: ${({ $size }) => PROFILE_INFO_STYLE[$size].fontSize}px;
    line-height: ${({ $size }) => PROFILE_INFO_STYLE[$size].lineHeight}px;
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
  gap: ${({ $size }) => PROFILE_INFO_STYLE[$size].cardGap}px;

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
      <Avatar imageUrl={imageUrl} size={PROFILE_INFO_STYLE[size].avatarSize} />
      <ProfileInfo $size={size}>
        <span>{name}</span>
        <span>{status}</span>
      </ProfileInfo>
    </StyledUserProfileCard>
  );
}

export default UserProfileCard;
