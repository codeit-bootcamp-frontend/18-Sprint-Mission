import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchProduct } from "../../api/products";
import { formatDateYYYYMMDD } from "../../utils/formatter";
import FavoriteButton from "../favorite-button";
import TagList from "../tag/tag-list";
import UserProfileCard from "../user-profile-card";
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

const ItemImage = styled.div`
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

const ItemInfo = styled.div`
  width: 100%;
`;

const InfoSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 1199px) {
    margin-top: 16px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-top: 62px;

  @media (max-width: 1199px) {
    margin-top: 40px;
  }
`;

const FavoriteContainer = styled.div`
  border-left: 1px solid var(--color-cool-gray-200);
  padding-left: 24px;
`;

function ItemDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id).then(setProduct);
  }, [id]);

  return product ? (
    <StyledItemDetail>
      <ItemImage>
        {product.images[0] && <img src={product.images[0]} />}
      </ItemImage>
      <ItemInfo>
        <ItemDetailTitle title={product.name} price={product.price} />
        <InfoSectionContainer>
          <ItemDetailSection
            title="상품 소개"
            description={product.description}
          />
          <ItemDetailSection title="상품 태그">
            <TagList tags={product.tags} />
          </ItemDetailSection>
        </InfoSectionContainer>
        <ProfileContainer>
          <UserProfileCard
            name={product.ownerNickname}
            status={formatDateYYYYMMDD(product.createdAt)}
          />
          <FavoriteContainer>
            <FavoriteButton
              isFavorite={product.isFavorite}
              count={product.favoriteCount}
            />
          </FavoriteContainer>
        </ProfileContainer>
      </ItemInfo>
    </StyledItemDetail>
  ) : (
    // TODO: Product loading 중 보여줄 UI
    <h2>Loading...</h2>
  );
}

export default ItemDetail;
