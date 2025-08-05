import styled from "styled-components";
import moreImg from "../../assets/ic-dots-3-vertical.svg";
import IconButton from "../button/icon-button";
import UserProfileCard from "../user-profile-card/user-profile-card";
import { USER_PROFILE_CARD_SIZE } from "../user-profile-card/user-profile-card-size";

const StyledItemComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-secondary-300);

  p {
    margin: 0;
    font-size: 14px;
    line-height: 24px;
  }
`;

const MoreButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
`;

function ItemComment({ writer, updatedAt, content }) {
  return (
    <StyledItemComment>
      <p>{content}</p>
      <UserProfileCard
        imageUrl={writer?.image}
        name={writer?.nickname}
        status={updatedAt}
        size={USER_PROFILE_CARD_SIZE.small}
      />
      <MoreButton src={moreImg} />
    </StyledItemComment>
  );
}

const StyledItemCommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 767px) {
    gap: 16px;
  }
`;

function ItemCommentList({ comments }) {
  return (
    <StyledItemCommentList>
      {comments.map((comment) => (
        <ItemComment key={comment.id} content={comment.content} />
      ))}
    </StyledItemCommentList>
  );
}

export default ItemCommentList;
