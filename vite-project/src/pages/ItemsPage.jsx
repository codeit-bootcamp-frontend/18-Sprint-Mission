import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../api/products";
import Button from "../components/Button";
import {
  ItemsSection,
  ItemsSectionContent,
  ItemsSectionHeader,
} from "../components/ItemsSection";
import OrderBySelect, { ORDER_BY_DEFAULT } from "../components/OrderBySelect";
import PageControl from "../components/PageControl";
import SearchInput from "../components/SearchInput";
import { useMediaQuery } from "../utils/useMediaQuery";
import "./ItemsPage.css";

function getNumberOfColumns(mediaQuery) {
  let bestProducts = 4;
  let products = 5;

  if (mediaQuery.isTablet) {
    bestProducts = 2;
    products = 3;
  }

  if (mediaQuery.isMobile) {
    bestProducts = 1;
    products = 2;
  }

  return { bestProducts, products };
}

function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [orderBy, setOrderBy] = useState(ORDER_BY_DEFAULT);
  const navigate = useNavigate();
  const mediaQuery = useMediaQuery();

  const numberOfColumns = getNumberOfColumns(mediaQuery);

  const bestProducts = [...products]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, numberOfColumns.bestProducts);

  const allProducts = products.slice(0, numberOfColumns.products * 2);

  const handleOrderByClick = () => setIsSelectOpen(!isSelectOpen);

  const handleAddClick = (e) => {
    e.preventDefault();
    navigate("/additem");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchProducts({
      page: currentPage,
      pageSize: numberOfColumns.products * 2,
      orderBy,
    })
      .then(({ products, numberOfPages }) => {
        setProducts(products);
        setCurrentPage((prev) => Math.min(prev, numberOfPages));
        setNumberOfPages(numberOfPages);
      })
      .catch(() => setProducts([]));
  }, [currentPage, orderBy, mediaQuery]);

  return (
    <div className="ItemsPage">
      <ItemsSection>
        <ItemsSectionHeader title="베스트 상품" />
        <ItemsSectionContent
          items={bestProducts}
          numberOfColumns={numberOfColumns.bestProducts}
        />
      </ItemsSection>
      <ItemsSection spacing={24}>
        <ItemsSectionHeader title="전체 상품">
          <SearchInput placeholder="검색할 상품을 입력해주세요" />
          <Button title="상품 등록하기" onClick={handleAddClick} />
          <OrderBySelect
            value={orderBy}
            isOpen={isSelectOpen}
            onClick={handleOrderByClick}
            onOptionClick={setOrderBy}
          />
        </ItemsSectionHeader>
        <ItemsSectionContent
          items={allProducts}
          numberOfColumns={numberOfColumns.products}
        />
        <PageControl
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </ItemsSection>
    </div>
  );
}

export default ItemsPage;
