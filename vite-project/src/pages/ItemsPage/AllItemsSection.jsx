import { useState, useEffect, useCallback } from "react";
import getItems from "@/api/item";
import useResponsiveView from "@/hooks/useResponsiveView";
import { SectionWrapper, SectionHeader, SectionTitle, ProductControlBar, SearchInput, AddItemButton } from "./style";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";

const ITEMS_DISPLAY_COUNT = {
  desktop: 10,
  tablet: 6,
  mobile: 4,
};

const AllItemsSection = () => {
  const view = useResponsiveView();
  const pageSize = ITEMS_DISPLAY_COUNT[view] || 10;
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [totalCount, setTotalCount] = useState(0);

  const getItemsData = useCallback(async () => {
    try {
      const data = await getItems({ page: currentPage, pageSize, orderBy });
      setItems(data.list || []);
      setTotalCount(data.totalCount || 0);
    } catch (error) {
      console.error(error);
    }
  }, [currentPage, pageSize, orderBy]);

  useEffect(() => {
    getItemsData();
  }, [getItemsData]);

  const handleOrderChange = newOrderBy => {
    setOrderBy(newOrderBy);
    setCurrentPage(1);
  };

  return (
    <SectionWrapper className="section-all-items">
      <SectionHeader>
        <SectionTitle>전체 상품</SectionTitle>
        <ProductControlBar>
          <SearchInput
            type="search"
            icon="search"
            iconAlign="left"
            appearance="secondary"
            placeholder="검색할 상품을 입력해주세요"
          />
          <Button label="상품 등록하기" shape="sm42" to="/additem" as={AddItemButton} />
          <Dropdown
            options={[
              { label: "최신순", value: "recent" },
              { label: "좋아요순", value: "favorite" },
            ]}
            value={orderBy}
            onChange={handleOrderChange}
            mobileIcon="sort"
          />
        </ProductControlBar>
      </SectionHeader>
      <Card items={items} />
      <Pagination
        totalDataCount={totalCount}
        itemsPerPage={pageSize}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </SectionWrapper>
  );
};

export default AllItemsSection;
