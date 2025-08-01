import styled from "styled-components";
import Tag from "./tag";

const StyledTagList = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 14px;
  flex-wrap: wrap;
`;

function TagList({ tags }) {
  return (
    <StyledTagList>
      {tags.map((tag) => (
        <Tag key={tag}>{"#" + tag}</Tag>
      ))}
    </StyledTagList>
  );
}

export default TagList;
