import { useState } from "react";
import styled from "styled-components";
import AddingItemImageContainer from "../../components/add-item/adding-item-image-container";
import Section from "../../components/section/section";
import SectionHeader from "../../components/section/section-header";
import SectionHeaderAction from "../../components/section/section-header-action";
import SectionHeaderSize from "../../components/section/section-header-size";
import TagList from "../../components/tag/tag-list";
import TextInput from "../../components/text-input";
import { formatPrice } from "../../utils/formatter";

const INITIAL_INPUT_VALUES = {
  title: "",
  description: "",
  price: "0",
  tag: "",
};

const StyledAddItemForm = styled.form`
  padding-bottom: 69px;
`;

const StyledTagSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

function AddItemPage() {
  const [inputValues, setInputValues] = useState(INITIAL_INPUT_VALUES);
  const [tags, setTags] = useState([]);
  const [canSubmit, setCanSubmit] = useState(false);

  const handleInputChange = (event) => {
    let nextValue = event.target.value;
    if (event.target.name === "price") {
      nextValue = nextValue.replace(/[^0-9]/g, "");
      nextValue = formatPrice(nextValue);
    }

    const nextProductInfo = {
      ...inputValues,
      [event.target.name]: nextValue,
    };
    setInputValues(nextProductInfo);

    const nextCanSubmit =
      nextProductInfo.title &&
      nextProductInfo.description &&
      nextProductInfo.price;
    setCanSubmit(nextCanSubmit);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleTagKeyUp = (event) => {
    if (event.key !== "Enter") return;

    const tagName = event.target.value.trim();
    if (tagName.length === 0) return;

    if (tags.includes(tagName)) return;
    setTags([...tags, tagName]);

    setInputValues({
      ...inputValues,
      tag: "",
    });
  };

  const handleTagRemove = (index) => {
    const nextTags = [...tags];
    nextTags.splice(index, 1);
    setTags(nextTags);
  };

  return (
    <StyledAddItemForm onSubmit={handleSubmit}>
      <Section spacing={24}>
        <SectionHeader title={"상품 등록하기"}>
          <SectionHeaderAction disabled={!canSubmit}>등록</SectionHeaderAction>
        </SectionHeader>
        <Section spacing={32}>
          <Section>
            <SectionHeader
              title={"상품 이미지"}
              size={SectionHeaderSize.SMALL}
            />
            <AddingItemImageContainer />
          </Section>
          <Section>
            <SectionHeader title={"상품명"} size={SectionHeaderSize.SMALL} />
            <TextInput
              name="title"
              value={inputValues["title"]}
              placeholder={"상품명을 입력해주세요"}
              onChange={handleInputChange}
            />
          </Section>
          <Section>
            <SectionHeader title={"상품 소개"} size={SectionHeaderSize.SMALL} />
            <TextInput
              name="description"
              value={inputValues["description"]}
              placeholder={"상품 소개를 입력해주세요"}
              onChange={handleInputChange}
              multiline
              rows="10"
            />
          </Section>
          <Section>
            <SectionHeader title={"판매 가격"} size={SectionHeaderSize.SMALL} />
            <TextInput
              name="price"
              value={inputValues["price"]}
              placeholder={"판매 가격을 입력해주세요"}
              onChange={handleInputChange}
            />
          </Section>
          <Section>
            <SectionHeader title={"태그"} size={SectionHeaderSize.SMALL} />
            <StyledTagSectionContent>
              <TextInput
                name="tag"
                value={inputValues["tag"]}
                placeholder={"태그를 입력해주세요"}
                onChange={handleInputChange}
                onKeyUp={handleTagKeyUp}
              />
              {tags.length > 0 && (
                <TagList tags={tags} onRemove={handleTagRemove} />
              )}
            </StyledTagSectionContent>
          </Section>
        </Section>
      </Section>
    </StyledAddItemForm>
  );
}

export default AddItemPage;
