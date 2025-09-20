import { useResponsivePage } from "../../hooks/useResponsivePage";
import ProductGrid from "../common/ProductGrid";

const BestProducts = ({ products }) => {
  const responsiveValues = useResponsivePage();

  return (
    <div className="flex flex-col gap-3 ">
      <h2 className="text-xl font-bold ">베스트 상품</h2>
      <ProductGrid
        products={products}
        gridSize={responsiveValues.bestPicContainerSize}
        picSize={responsiveValues.bestPicSize}
      />
    </div>
  );
};

export default BestProducts;
