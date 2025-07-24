import {
  ItemsSection,
  ItemsSectionContent,
  ItemsSectionHeader,
} from "../components/ItemsSection";
import "./ItemsPage.css";

function ItemsPage() {
  return (
    <div className="ItemsPage">
      <ItemsSection>
        <ItemsSectionHeader title="베스트 상품" />
        <ItemsSectionContent numberOfColumns={4}>
          <div>상품 1</div>
          <div>상품 2</div>
          <div>상품 3</div>
          <div>상품 4</div>
        </ItemsSectionContent>
      </ItemsSection>
      <ItemsSection spacing={24}>
        <ItemsSectionHeader title="전체 상품">
          <input placeholder="검색할 상품을 입력해주세요" />
          <button>상품 등록하기</button>
          <button>최신순</button>
        </ItemsSectionHeader>
        <ItemsSectionContent numberOfColumns={5}>
          <div>상품 1</div>
          <div>상품 2</div>
          <div>상품 3</div>
          <div>상품 4</div>
          <div>상품 5</div>
          <div>상품 6</div>
          <div>상품 7</div>
          <div>상품 8</div>
          <div>상품 9</div>
          <div>상품 10</div>
        </ItemsSectionContent>
      </ItemsSection>
    </div>
  );
}

export default ItemsPage;
