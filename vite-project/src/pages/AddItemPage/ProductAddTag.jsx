import { useState } from "react";
import styled from "styled-components";
import xIcon from "../../assets/ic-x.svg";

const ProductAddTagDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const ProductAddTagTitle = styled.h1`
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--gray-800);
`;

const ProductAddTagInput = styled.input`
  border-radius: 1.2rem;
  padding: 1.6rem 2.4rem;
  height: 5.6rem;
  background-color: var(--gray-100);
  border: 0.1rem solid var(--gray-100);
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--gray-800);

  &::placeholder {
    color: var(--gray-400);
  }
`;

const TagList = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const TagSpan = styled.span`
  border-radius: 2.6rem;
  border: 0.1rem solid var(--gray-100);
  background-color: var(--gray-100);
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 3.6rem;
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--gray-800);
  padding: 0.6rem 1.2rem;
  gap: 1rem;
  img {
    cursor: pointer;
  }
`;

export default function ProductAddTag({ onTagsChange }) {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      const newTags = [...tags, input.trim()];
      setTags(newTags);
      onTagsChange(newTags);
      setInput("");
    }
  };

  const handleDeleteClick = (deletespan) => {
    const newTags = tags.filter((_, id) => id !== deletespan);
    setTags(newTags);
    onTagsChange(newTags);
  };

  return (
    <ProductAddTagDiv>
      <ProductAddTagTitle>태그</ProductAddTagTitle>
      <ProductAddTagInput
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="태그를 입력해주세요"
        onKeyDown={handleKeyDown}
      />
      <TagList>
        {tags.map((tag, id) => (
          <TagSpan key={id}>
            #{tag}
            <img
              src={xIcon}
              alt="X 아이콘"
              onClick={() => handleDeleteClick(id)}
            />
          </TagSpan>
        ))}
      </TagList>
    </ProductAddTagDiv>
  );
}
