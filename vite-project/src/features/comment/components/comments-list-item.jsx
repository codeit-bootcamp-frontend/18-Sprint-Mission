import { useRef, useState } from "react";
import styled from "styled-components";
import moreImg from "../../../assets/ic-dots-3-vertical.svg";
import Button from "../../../components/button/button";
import IconButton from "../../../components/button/icon-button";
import TextInput from "../../../components/input/text-input";
import UserProfileCard from "../../../components/user-profile-card/user-profile-card";
import { USER_PROFILE_CARD_SIZE } from "../../../components/user-profile-card/user-profile-card-size";
import { formatElapsedTime } from "../../../utils/formatter";

const StyledCommentsListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $isEditing }) => ($isEditing ? 16 : 24)}px;
  position: relative;
  padding-bottom: ${({ $isEditing }) => ($isEditing ? 24 : 12)}px;
  border-bottom: 1px solid var(--color-secondary-300);

  p {
    margin: 0;
    font-size: 14px;
    line-height: 24px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditingButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  button:first-child {
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    color: var(--color-gray-500);
    cursor: pointer;
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

function CommentsListItem({ writer, updatedAt, content, onEdit, onDelete }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const handleInputChange = () => {
    // TODO: Comment 등록 구현
  };

  const handleMoreClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleEditClick = () => {
    setIsMenuOpen(false);
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    setIsMenuOpen(false);
    onDelete();
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleEditDoneClick = () => {
    setIsEditing(false);
    onEdit(inputRef.current.value);
  };

  return (
    <StyledCommentsListItem $isEditing={isEditing}>
      {isEditing ? (
        <TextInput
          value={content}
          onChange={handleInputChange}
          ref={inputRef}
        />
      ) : (
        <p>{content}</p>
      )}
      <BottomContainer>
        <UserProfileCard
          imageUrl={writer.image}
          name={writer.nickname}
          status={formatElapsedTime(updatedAt)}
          size={USER_PROFILE_CARD_SIZE.small}
        />
        {isEditing && (
          <EditingButtonContainer>
            <button onClick={handleCancelClick}>취소</button>
            <Button onClick={handleEditDoneClick}>수정 완료</Button>
          </EditingButtonContainer>
        )}
      </BottomContainer>
      {isEditing || <MoreButton src={moreImg} onClick={handleMoreClick} />}
      {isMenuOpen && (
        <Dropdown>
          <button onClick={handleEditClick}>수정하기</button>
          <button onClick={handleDeleteClick}>삭제하기</button>
        </Dropdown>
      )}
    </StyledCommentsListItem>
  );
}

export default CommentsListItem;
