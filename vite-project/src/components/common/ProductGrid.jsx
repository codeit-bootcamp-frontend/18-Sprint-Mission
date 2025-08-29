import ProductCard from "./ProductCard";
import { GRID_SIZES } from "./ProductGridTokens";

const productGrid = ({ gridSize = "grid224", products }) => {
  const sizeClass = GRID_SIZES[gridSize] || "";

  return (
    <div className="flex gap-3">
      {" "}
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            className={sizeClass}
            name={product.name}
            price={product.price}
            images={product.images}
          />
        );
      })}
    </div>
  );
};

export default productGrid;
