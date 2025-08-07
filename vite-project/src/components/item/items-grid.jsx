import { Link } from "react-router-dom";
import styled from "styled-components";
import Item from "./item";

const StyledItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ $numberOfColumns }) => $numberOfColumns},
    1fr
  );
  column-gap: 24px;
  row-gap: 40px;
`;

function ItemsGrid({ items, numberOfColumns }) {
  return (
    <StyledItemsGrid $numberOfColumns={numberOfColumns}>
      {items.map((product) => (
        <Link
          to={`${product.id}`}
          key={product.id}
          style={{ textDecoration: "none" }}
        >
          <Item
            imageUrl={product.images[0]}
            title={product.name}
            price={product.price}
            likeCount={product.favoriteCount}
          />
        </Link>
      ))}
    </StyledItemsGrid>
  );
}

export default ItemsGrid;
