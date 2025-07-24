import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import Button from "../components/Button";
import {
  ItemsSection,
  ItemsSectionContent,
  ItemsSectionHeader,
} from "../components/ItemsSection";
import SearchInput from "../components/SearchInput";
import Select from "../components/Select";
import "./ItemsPage.css";

function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const bestProducts = [...products]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 4);

  const handleSelectClick = (e) => setIsSelectOpen(!isSelectOpen);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

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
          <Select
            value="최신순"
            options={["최신순", "좋아요순"]}
            isOpen={isSelectOpen}
            onClick={handleSelectClick}
          />
        </ItemsSectionHeader>
        <ItemsSectionContent items={products} numberOfColumns={5} />
      </ItemsSection>
    </div>
  );
}

export default ItemsPage;
