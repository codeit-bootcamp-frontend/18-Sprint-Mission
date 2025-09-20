import { SectionWrapper, SectionHeader, SectionTitle, ProductControlBar } from "./style";
import Card from "../../components/Card";

const dummy = [
  {
    id: 1,
    title: "아이패드 미니 팝니다",
    price: "500,000원",
    imgUrl: "/src/assets/icons/ic_heart.svg",
    likes: 240,
  },
  {
    id: 2,
    title: "로봇 청소기",
    price: "300,000원",
    imgUrl: "/src/assets/icons/ic_profile.svg",
    likes: 120,
  },
  {
    id: 3,
    title: "곰인형",
    price: "400,000원",
    imgUrl: "/src/assets/icons/ic_search.svg",
    likes: 80,
  },
  {
    id: 4,
    title: "티셔츠",
    price: "400,000원",
    imgUrl: "/src/assets/items/logo.png",
    likes: 80,
  },
  {
    id: 5,
    title: "빗자루",
    price: "104,000원",
    imgUrl: "/src/assets/logo/logo.svg",
    likes: 180,
  },
  {
    id: 6,
    title: "모니터",
    price: "1,304,000원",
    imgUrl: "/src/assets/logo/logo_text.svg",
    likes: 21,
  },
];
const BestItemsSection = () => {
  return (
    <SectionWrapper className="section-best-items">
      <SectionHeader>
        <SectionTitle>베스트 상품</SectionTitle>
      </SectionHeader>
      <Card items={dummy} type="best" />
    </SectionWrapper>
  );
};

export default BestItemsSection;
