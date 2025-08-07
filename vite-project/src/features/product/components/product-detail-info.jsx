import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "../../../components/favorite-button";
import TagList from "../../../components/tag/tag-list";
import UserProfileCard from "../../../components/user-profile-card/user-profile-card";
import { formatDateYYYYMMDD } from "../../../utils/formatter";
import { fetchProduct } from "../apis/products";
import ProductDetailSection from "./product-detail-section";
import ProductDetailTitle from "./product-detail-title";

const StyledProductDetailInfo = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1199px) {
    gap: 16px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ProductImage = styled.div`
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

const ProductInfo = styled.div`
  width: 100%;
`;

const ProductInfoContent = styled.div`
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

function ProductDetailInfo() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id).then(setProduct);
  }, [id]);

  return product ? (
    <StyledProductDetailInfo>
      <ProductImage>
        {product.images[0] && <img src={product.images[0]} />}
      </ProductImage>
      <ProductInfo>
        <ProductDetailTitle title={product.name} price={product.price} />
        <ProductInfoContent>
          <ProductDetailSection
            title="상품 소개"
            description={product.description}
          />
          <ProductDetailSection title="상품 태그">
            <TagList tags={product.tags} />
          </ProductDetailSection>
        </ProductInfoContent>
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
      </ProductInfo>
    </StyledProductDetailInfo>
  ) : (
    // TODO: Product loading 중 보여줄 UI
    <h2>Loading...</h2>
  );
}

export default ProductDetailInfo;
