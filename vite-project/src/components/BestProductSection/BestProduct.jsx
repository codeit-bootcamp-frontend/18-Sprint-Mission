import { useResponsivePage } from "../../hooks/useResponsivePage";
import ProductGrid from "./../common/ProductGrid";

const BestProduct = ({ products }) => {
  const { bestPicSize, bestPicContainerSize } = useResponsivePage();

  return (
    <div className="flex flex-col gap-3 ">
      <h2 className="text-xl font-bold ">베스트 상품</h2>
      <ProductGrid
        products={products}
        gridSize={bestPicContainerSize}
        picSize={bestPicSize}
      />
    </div>
  );
};

export default BestProduct;
