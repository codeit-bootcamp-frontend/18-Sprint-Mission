import Button from "../../components/Button";
import Section from "../../components/section/section";
import SectionHeader from "../../components/section/section-header";
import SectionHeaderSize from "../../components/section/section-header-size";

function AddItemPage() {
  return (
    <Section spacing={24}>
      <SectionHeader title={"상품 등록하기"}>
        <Button disabled>등록</Button>
      </SectionHeader>
      <Section spacing={32}>
        <Section>
          <SectionHeader title={"상품 이미지"} size={SectionHeaderSize.SMALL} />
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
