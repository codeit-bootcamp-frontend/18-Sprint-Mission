import { useState } from "react";
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

const Dropdown = styled.div`
  min-width: 139px;
  border: 1px solid var(--color-cool-gray-300);
  border-radius: 8px;
  position: absolute;
  top: 34px;
  right: 0;
  background-color: white;
  z-index: 1;

  button {
    display: block;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: var(--color-secondary-500);
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    width: 100%;
    cursor: pointer;
  }
`;

function CommentListItem({ writer, updatedAt, content }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMoreClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleOptionClick = () => {
    // TODO: 수정하기 or 삭제하기 기능 구현
  };

  return (
    <StyledItemComment>
      <p>{content}</p>
      <UserProfileCard
        imageUrl={writer?.image}
        name={writer?.nickname}
        status={updatedAt}
        size={USER_PROFILE_CARD_SIZE.small}
      />
      <MoreButton src={moreImg} onClick={handleMoreClick} />
      {isMenuOpen && (
        <Dropdown>
          <button onClick={handleOptionClick}>수정하기</button>
          <button onClick={handleOptionClick}>삭제하기</button>
        </Dropdown>
      )}
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

function ItemCommentList() {
  return (
    <StyledItemCommentList>
      <CommentListItem
        writer={{ nickname: "똑똑한판다" }}
        content="혹시 사용기간이 어떻게 되실까요?"
      />
      <CommentListItem
        writer={{ nickname: "똑똑한판다" }}
        content="혹시 사용기간이 어떻게 되실까요?"
      />
      <CommentListItem
        writer={{ nickname: "똑똑한판다" }}
        content="혹시 사용기간이 어떻게 되실까요?"
      />
      <CommentListItem
        writer={{ nickname: "똑똑한판다" }}
        content="혹시 사용기간이 어떻게 되실까요?"
      />
      <CommentListItem
        writer={{ nickname: "똑똑한판다" }}
        content="혹시 사용기간이 어떻게 되실까요?"
      />
      {/* {comments.map((comment) => (
        <CommentListItem key={comment.id} content={comment.content} />
      ))} */}
    </StyledItemCommentList>
  );
}

export default ItemCommentList;
