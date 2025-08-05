import styled from "styled-components";
import { formatDateYYYYMMDD } from "../../utils/formatter";
import Avatar from "../avatar";

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span:first-child {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: var(--color-secondary-600);
  }

  span:last-child {
    font-size: 14px;
    line-height: 24px;
    color: var(--color-cool-gray-400);
  }
`;

const StyledItemDetailProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${ProfileInfo} {
    flex-grow: 1;
  }
`;

function ItemDetailProfile({ imageUrl, name, createdAt }) {
  return (
    <StyledItemDetailProfile>
      <Avatar imageUrl={imageUrl} />
      <ProfileInfo>
        <span>{name}</span>
        <span>{formatDateYYYYMMDD(createdAt)}</span>
      </ProfileInfo>
    </StyledItemDetailProfile>
  );
}

export default ItemDetailProfile;
