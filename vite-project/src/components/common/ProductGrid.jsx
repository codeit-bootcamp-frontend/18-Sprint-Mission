import ProductCard from "./ProductCard";
import { GRID_SIZES } from "./ProductGridClasses";
import { PIC_SIZES } from "./ProductGridClasses";

const ProductGrid = ({
  gridSize = "grid224",
  picSize = "normalPicSize",
  products,
}) => {
  const sizeClass = GRID_SIZES[gridSize] || "";
  const picSizeClass = PIC_SIZES[picSize] || "";

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            className={`${sizeClass}`}
            name={product.name}
            price={product.price}
            favoriteCount={product.favoriteCount}
            images={product.images}
            picSizeClass={picSizeClass}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
