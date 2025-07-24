import Item from "../components/Item";
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
          <Item title="아이패드 미니 팝니다" price={500000} likeCount={240} />
          <Item title="아이패드 미니 팝니다" price={500000} likeCount={240} />
          <Item title="아이패드 미니 팝니다" price={500000} likeCount={240} />
          <Item title="아이패드 미니 팝니다" price={500000} likeCount={240} />
        </ItemsSectionContent>
      </ItemsSection>
      <ItemsSection spacing={24}>
        <ItemsSectionHeader title="전체 상품">
          <input placeholder="검색할 상품을 입력해주세요" />
          <button>상품 등록하기</button>
          <button>최신순</button>
        </ItemsSectionHeader>
        <ItemsSectionContent numberOfColumns={5}>
          <Item title="로봇 청소기" price={1500000} likeCount={240} />
          <Item title="로봇 청소기" price={1500000} likeCount={240} />
          <Item title="로봇 청소기" price={1500000} likeCount={240} />
          <Item title="로봇 청소기" price={1500000} likeCount={240} />
          <Item title="로봇 청소기" price={1500000} likeCount={240} />
          <Item title="로봇 청소기" price={1500000} likeCount={240} />
          <Item title="로봇 청소기" price={1500000} likeCount={240} />
          <Item title="로봇 청소기" price={1500000} likeCount={240} />
          <Item title="로봇 청소기" price={1500000} likeCount={240} />
          <Item title="로봇 청소기" price={1500000} likeCount={240} />
        </ItemsSectionContent>
      </ItemsSection>
    </div>
  );
}

export default ItemsPage;
