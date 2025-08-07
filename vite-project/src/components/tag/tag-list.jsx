import styled from "styled-components";
import Tag from "./tag";

const StyledTagList = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

function TagList({ tags, onRemove }) {
  return (
    <StyledTagList>
      {tags.map((tag) => (
        <Tag key={tag} onRemove={onRemove ? () => onRemove(tag) : undefined}>
          {"#" + tag}
        </Tag>
      ))}
    </StyledTagList>
  );
}

export default TagList;
