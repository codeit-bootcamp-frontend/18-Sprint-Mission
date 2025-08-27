import { GRID_SIZES } from "./ProductGridTokens";

const productGrid = ({ gridSize }) => {
  const sizeClass = GRID_SIZES[gridSize] || "";

  return <img src="" alt="" />;
};

export default productGrid;
