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
        <Item
          key={product.id}
          imageUrl={product.images[0]}
          title={product.name}
          price={product.price}
          likeCount={product.favoriteCount}
        />
      ))}
    </StyledItemsGrid>
  );
}

export default ItemsGrid;
