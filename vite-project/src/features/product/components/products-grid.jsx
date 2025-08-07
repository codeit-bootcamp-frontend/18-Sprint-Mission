import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductGridItem from "./product-grid-item";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ $numberOfColumns }) => $numberOfColumns},
    1fr
  );
  column-gap: 24px;
  row-gap: 40px;
`;

function ProductsGrid({ items, numberOfColumns }) {
  return (
    <StyledProductsGrid $numberOfColumns={numberOfColumns}>
      {items.map((product) => (
        <Link
          to={`${product.id}`}
          key={product.id}
          style={{ textDecoration: "none" }}
        >
          <ProductGridItem
            imageUrl={product.images[0]}
            title={product.name}
            price={product.price}
            likeCount={product.favoriteCount}
          />
        </Link>
      ))}
    </StyledProductsGrid>
  );
}

export default ProductsGrid;
