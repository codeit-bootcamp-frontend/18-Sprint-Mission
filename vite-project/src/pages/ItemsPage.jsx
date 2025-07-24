import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import Button from "../components/Button";
import {
  ItemsSection,
  ItemsSectionContent,
  ItemsSectionHeader,
} from "../components/ItemsSection";
import OrderBySelect, { ORDER_BY_DEFAULT } from "../components/OrderBySelect";
import SearchInput from "../components/SearchInput";
import "./ItemsPage.css";

function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [orderBy, setOrderBy] = useState(ORDER_BY_DEFAULT);

  const bestProducts = [...products]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 4);

  const handleOrderByClick = () => setIsSelectOpen(!isSelectOpen);

  useEffect(() => {
    fetchProducts({
      orderBy,
    })
      .then(setProducts)
      .catch(() => setProducts([]));
  }, [orderBy]);

  return (
    <div className="ItemsPage">
      <ItemsSection>
        <ItemsSectionHeader title="베스트 상품" />
        <ItemsSectionContent items={bestProducts} numberOfColumns={4} />
      </ItemsSection>
      <ItemsSection spacing={24}>
        <ItemsSectionHeader title="전체 상품">
          <SearchInput placeholder="검색할 상품을 입력해주세요" />
          <Button title="상품 등록하기" />
          <OrderBySelect
            value={orderBy}
            isOpen={isSelectOpen}
            onClick={handleOrderByClick}
            onOptionClick={setOrderBy}
          />
        </ItemsSectionHeader>
        <ItemsSectionContent items={products} numberOfColumns={5} />
      </ItemsSection>
    </div>
  );
}

export default ItemsPage;
