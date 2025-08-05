import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchProduct } from "../../api/products";
import TagList from "../tag/tag-list";
import ItemDetailSection from "./item-detail-section";
import ItemDetailTitle from "./item-detail-title";

const StyledItemDetail = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1199px) {
    gap: 16px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const StyledItemDetailImage = styled.div`
  width: 486px;
  height: 486px;
  aspect-ratio: 1 / 1;

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
  }

  @media (max-width: 1199px) {
    width: 340px;
    height: 340px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

const StyledItemDetailInfo = styled.div`
  width: 100%;
`;

const StyledItemDetailSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 1199px) {
    margin-top: 16px;
  }
`;

function ItemDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id).then(setProduct);
  }, [id]);

  return product ? (
    <StyledItemDetail>
      <StyledItemDetailImage>
        {product.images[0] && <img src={product.images[0]} />}
      </StyledItemDetailImage>
      <StyledItemDetailInfo>
        <ItemDetailTitle title={product.name} price={product.price} />
        <StyledItemDetailSections>
          <ItemDetailSection
            title="상품 소개"
            description={product.description}
          />
          <ItemDetailSection title="상품 태그">
            <TagList tags={product.tags} />
          </ItemDetailSection>
        </StyledItemDetailSections>
      </StyledItemDetailInfo>
    </StyledItemDetail>
  ) : (
    // TODO: Product loading 중 보여줄 UI
    <h2>Loading...</h2>
  );
}

export default ItemDetail;
