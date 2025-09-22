import PageContainer from "@/components/Layout/PageLayout/PageContainer";
import BestItemsSection from "./BestItemsSection";
import AllItemsSection from "./AllItemsSection";

const ItemsPage = () => {
  return (
    <PageContainer title="중고마켓">
      <BestItemsSection />
      <AllItemsSection />
    </PageContainer>
  );
};

export default ItemsPage;
