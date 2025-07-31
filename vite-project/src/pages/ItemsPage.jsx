import { useCallback, useEffect, useMemo, useState } from "react";
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
import { useDevice } from "../hooks/useDevice";
import "./ItemsPage.css";

function getNumberOfColumns(deviceInfo) {
  let bestProductsColumns = 4;
  let productsColumns = 5;

  if (deviceInfo.isTablet) {
    bestProductsColumns = 2;
    productsColumns = 3;
  }

  if (deviceInfo.isMobile) {
    bestProductsColumns = 1;
    productsColumns = 2;
  }

  return { bestProductsColumns, productsColumns };
}

function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [orderBy, setOrderBy] = useState(ORDER_BY_DEFAULT);
  const navigate = useNavigate();
  const deviceInfo = useDevice();

  const { bestProductsColumns, productsColumns } =
    getNumberOfColumns(deviceInfo);

  const bestProducts = useMemo(
    () =>
      [...products]
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
        .slice(0, bestProductsColumns),
    [products]
  );

  const allProducts = products.slice(0, productsColumns * 2);

  const handleOrderByClick = () => setIsSelectOpen(!isSelectOpen);

  const handleAddClick = (e) => {
    e.preventDefault();
    navigate("/additem");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fetch = useCallback(() => {
    fetchProducts({
      page: currentPage,
      pageSize: productsColumns * 2,
      orderBy,
    })
      .then(({ products, numberOfPages }) => {
        setProducts(products);
        setCurrentPage((prev) => Math.min(prev, numberOfPages));
        setNumberOfPages(numberOfPages);
      })
      .catch(() => setProducts([]));
  }, [currentPage, orderBy, productsColumns]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="ItemsPage">
      <ItemsSection>
        <ItemsSectionHeader title="베스트 상품" />
        <ItemsSectionContent
          items={bestProducts}
          numberOfColumns={bestProductsColumns}
        />
      </ItemsSection>
      <ItemsSection spacing={24}>
        <ItemsSectionHeader title="전체 상품">
          <SearchInput placeholder="검색할 상품을 입력해주세요" />
          <Button onClick={handleAddClick}>상품 등록하기</Button>
          <OrderBySelect
            value={orderBy}
            isOpen={isSelectOpen}
            isMobile={deviceInfo.isMobile}
            onClick={handleOrderByClick}
            onOptionClick={setOrderBy}
          />
        </ItemsSectionHeader>
        <ItemsSectionContent
          items={allProducts}
          numberOfColumns={productsColumns}
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
