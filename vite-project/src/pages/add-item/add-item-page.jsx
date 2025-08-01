import styled from "styled-components";
import AddingItemImageContainer from "../../components/add-item/adding-item-image-container";

import Section from "../../components/section/section";
import SectionHeader from "../../components/section/section-header";
import SectionHeaderAction from "../../components/section/section-header-action";
import SectionHeaderSize from "../../components/section/section-header-size";
import TextInput from "../../components/text-input";

const StyledItemsPage = styled.form`
  padding-bottom: 69px;
`;

function AddItemPage() {
  return (
    <StyledItemsPage>
      <Section spacing={24}>
        <SectionHeader title={"상품 등록하기"}>
          <SectionHeaderAction disabled>등록</SectionHeaderAction>
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
            <TextInput placeholder={"상품명을 입력해주세요"} />
          </Section>
          <Section>
            <SectionHeader title={"상품 소개"} size={SectionHeaderSize.SMALL} />
            <TextInput placeholder={"상품 소개를 입력해주세요"} multiline />
          </Section>
          <Section>
            <SectionHeader title={"판매 가격"} size={SectionHeaderSize.SMALL} />
            <TextInput placeholder={"판매 가격을 입력해주세요"} />
          </Section>
          <Section>
            <SectionHeader title={"태그"} size={SectionHeaderSize.SMALL} />
            <TextInput placeholder={"태그를 입력해주세요"} />
          </Section>
        </Section>
      </Section>
    </StyledItemsPage>
  );
}

export default AddItemPage;
