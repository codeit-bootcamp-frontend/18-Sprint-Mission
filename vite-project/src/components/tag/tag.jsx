import styled from "styled-components";
import removeImg from "../../assets/ic-xmark-fill.svg";

const StyledTag = styled.div`
  background-color: var(--color-cool-gray-100);
  color: var(--color-secondary-800);
  font-size: 16px;
  line-height: 26px;
  padding: 5px 0;
  padding-left: 16px;
  padding-right: ${({ onRemove }) => (onRemove ? 12 : 16)}px;
  border-radius: 26px;
  display: flex;
  gap: 8px;
  align-items: center;

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    width: 22px;
    height: 24px;
  }
`;

function Tag({ children, onRemove }) {
  return (
    <StyledTag>
      <span>{children}</span>
      {onRemove && (
        <button type="button" onClick={onRemove}>
          <img src={removeImg} alt="태그 삭제" />
        </button>
      )}
    </StyledTag>
  );
}

export default Tag;
