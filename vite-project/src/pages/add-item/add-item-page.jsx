import AddingItemImageContainer from "../../components/add-item/adding-item-image-container";

import Section from "../../components/section/section";
import SectionHeader from "../../components/section/section-header";
import SectionHeaderAction from "../../components/section/section-header-action";
import SectionHeaderSize from "../../components/section/section-header-size";

function AddItemPage() {
  return (
    <Section spacing={24}>
      <SectionHeader title={"상품 등록하기"}>
        <SectionHeaderAction disabled>등록</SectionHeaderAction>
      </SectionHeader>
      <Section spacing={32}>
        <Section>
          <SectionHeader title={"상품 이미지"} size={SectionHeaderSize.SMALL} />
          <AddingItemImageContainer />
        </Section>
        <Section>
          <SectionHeader title={"상품명"} size={SectionHeaderSize.SMALL} />
        </Section>
        <Section>
          <SectionHeader title={"상품 소개"} size={SectionHeaderSize.SMALL} />
        </Section>
        <Section>
          <SectionHeader title={"판매 가격"} size={SectionHeaderSize.SMALL} />
        </Section>
        <Section>
          <SectionHeader title={"태그"} size={SectionHeaderSize.SMALL} />
        </Section>
      </Section>
    </Section>
  );
}

export default AddItemPage;
