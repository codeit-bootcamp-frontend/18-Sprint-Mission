import { useState } from "react";
import styled from "styled-components";
import AddingItemImageContainer from "../../components/add-item/adding-item-image-container";
import Section from "../../components/section/section";
import SectionHeader from "../../components/section/section-header";
import SectionHeaderAction from "../../components/section/section-header-action";
import SectionHeaderSize from "../../components/section/section-header-size";
import TagList from "../../components/tag/tag-list";
import TextInput from "../../components/text-input";

const INITIAL_PRODUCT_INFO = {
  title: "",
  description: "",
  price: "",
  tags: [],
};

const StyledItemsPage = styled.form`
  padding-bottom: 69px;
`;

function AddItemPage() {
  const [productInfo, setProductInfo] = useState(INITIAL_PRODUCT_INFO);
  const [canSubmit, setCanSubmit] = useState(false);

  const handleInputChange = (event) => {
    const nextProductInfo = {
      ...productInfo,
      [event.target.name]: event.target.value,
    };
    setProductInfo(nextProductInfo);

    const nextCanSubmit =
      nextProductInfo.title &&
      nextProductInfo.description &&
      nextProductInfo.price;
    setCanSubmit(nextCanSubmit);
  };

  return (
    <StyledItemsPage>
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
              value={productInfo["title"]}
              placeholder={"상품명을 입력해주세요"}
              onChange={handleInputChange}
            />
          </Section>
          <Section>
            <SectionHeader title={"상품 소개"} size={SectionHeaderSize.SMALL} />
            <TextInput
              name="description"
              value={productInfo["description"]}
              placeholder={"상품 소개를 입력해주세요"}
              onChange={handleInputChange}
              multiline
            />
          </Section>
          <Section>
            <SectionHeader title={"판매 가격"} size={SectionHeaderSize.SMALL} />
            <TextInput
              name="price"
              value={productInfo["price"]}
              placeholder={"판매 가격을 입력해주세요"}
              onChange={handleInputChange}
            />
          </Section>
          <Section>
            <SectionHeader title={"태그"} size={SectionHeaderSize.SMALL} />
            <div>
              <TextInput
                placeholder={"태그를 입력해주세요"}
                onChange={handleInputChange}
              />
              <TagList tags={["상의", "티셔츠"]} />
            </div>
          </Section>
        </Section>
      </Section>
    </StyledItemsPage>
  );
}

export default AddItemPage;
