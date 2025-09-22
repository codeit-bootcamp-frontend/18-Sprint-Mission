import { useState, useEffect, useCallback } from "react";
import getItems from "@/api/item";
import useResponsiveView from "@/hooks/useResponsiveView";
import { SectionWrapper, SectionHeader, SectionTitle, ProductControlBar } from "./style";
import Card from "@/components/Card";

const ITEMS_DISPLAY_COUNT = {
  desktop: 4,
  tablet: 2,
  mobile: 1,
};

const BestItemsSection = () => {
  const view = useResponsiveView();
  const pageSize = ITEMS_DISPLAY_COUNT[view] || 4;
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState("favorite");

  const getItemsData = useCallback(async () => {
    try {
      const data = await getItems({ pageSize, orderBy });
      setItems(data.list || []);
    } catch (error) {
      console.error(error);
    }
  }, [pageSize, orderBy]);

  useEffect(() => {
    getItemsData();
  }, [getItemsData]);

  return (
    <SectionWrapper className="section-best-items">
      <SectionHeader>
        <SectionTitle>베스트 상품</SectionTitle>
      </SectionHeader>
      <Card items={items} type="main" />
    </SectionWrapper>
  );
};

export default BestItemsSection;
