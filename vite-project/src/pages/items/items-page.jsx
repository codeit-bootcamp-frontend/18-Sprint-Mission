import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchInput from "../../components/input/search-input";
import PageControl from "../../components/page-control/page-control";
import Section from "../../components/section/section";
import SectionHeader from "../../components/section/section-header";
import SectionHeaderAction from "../../components/section/section-header-action";
import { fetchProducts } from "../../features/product/apis/products";
import ProductSortSelect from "../../features/product/components/product-sort-select";
import ProductsGrid from "../../features/product/components/products-grid";
import { ORDER_BY_DEFAULT } from "../../features/product/utils/order-by-values";
import { useDevice } from "../../hooks/useDevice";

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

const StyledItemsPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

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
    [bestProductsColumns, products]
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

  useEffect(() => {
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

  return (
    <StyledItemsPage>
      <Section>
        <SectionHeader title="베스트 상품" />
        <ProductsGrid
          items={bestProducts}
          numberOfColumns={bestProductsColumns}
        />
      </Section>
      <Section spacing={24}>
        <SectionHeader title="전체 상품">
          <SearchInput placeholder="검색할 상품을 입력해주세요" />
          <SectionHeaderAction onClick={handleAddClick}>
            상품 등록하기
          </SectionHeaderAction>
          <ProductSortSelect
            value={orderBy}
            isOpen={isSelectOpen}
            isMobile={deviceInfo.isMobile}
            onClick={handleOrderByClick}
            onOptionClick={setOrderBy}
          />
        </SectionHeader>
        <ProductsGrid items={allProducts} numberOfColumns={productsColumns} />
        <PageControl
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Section>
    </StyledItemsPage>
  );
}

export default ItemsPage;
