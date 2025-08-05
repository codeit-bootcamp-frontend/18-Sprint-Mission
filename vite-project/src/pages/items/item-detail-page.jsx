import styled from "styled-components";
import ItemComment from "../../components/item-comment/item-comment";
import ItemDetail from "../../components/item-detail/item-detail";

const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-cool-gray-200);
  margin: 40px 0;

  @media (max-width: 1199px) {
    margin-top: 32px;
  }

  @media (max-width: 767px) {
    margin: 24px 0;
  }
`;

function ItemDetailPage() {
  return (
    <div>
      <ItemDetail />
      <Separator />
      <ItemComment />
    </div>
  );
}

export default ItemDetailPage;
