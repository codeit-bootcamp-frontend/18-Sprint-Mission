import { useLocation, useParams } from "react-router";
import { requestProductDetail } from "../../services/itemsApi";
import { useEffect, useState } from "react";
import {
  Heart,
  HeartCount,
  ProductDate,
  ProductImg,
  ProductInfoBox,
  ProductOwnerName,
  ProductPrice,
  ProductSubTitle,
  ProductTextArea,
  ProductTextBox,
  ProductTitle,
} from "../../styles/items/ItemDetailStyle";
import { ItemsTag, palette, ProfileImg } from "../../styles/commonStyles";
import icProfile from "../../assets/icons/ic_profile.svg";
import icHeartInactive from "../../assets/icons/ic_heart_inactive_large.svg";
import icHeartActive from "../../assets/icons/ic_heart_active_large.svg";
import Inquiry from "../../components/Inquiry";
import useService from "../../hooks/useService";

export default function ItemDetail() {
  /**
   * 상품의 id
   */
  const { productId } = useParams();

  /**
   * 목록에서 가져온 상품 정보
   */
  const { state: productInfo } = useLocation();

  /**
   * 상품 정보 받아오기
   */
  const { data, isLoading } = useService(() => requestProductDetail(productId));

  return (
    <>
      <div style={{ width: "1200px", margin: "0 auto" }}>
        <ProductInfoBox>
          <ProductImg src={productInfo.images[0]} alt="상품 이미지" />
          <ProductTextBox>
            <div style={{ borderBottom: `1px solid ${palette.gray200}` }}>
              <div style={{ display: "flex" }}>
                <ProductTitle>{productInfo.name}</ProductTitle>
              </div>
              <ProductPrice>
                {productInfo.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"}
              </ProductPrice>
            </div>
            <div style={{ height: "146px" }}>
              <ProductSubTitle>상품 소개</ProductSubTitle>
              <ProductTextArea>{productInfo.description}</ProductTextArea>
            </div>
            <div style={{ marginBottom: "90px" }}>
              <ProductSubTitle>상품 태그</ProductSubTitle>
              <div style={{ display: "flex" }}>
                {productInfo.tags.map((tag) => {
                  return <ItemsTag key={tag}>{`#${tag}`}</ItemsTag>;
                })}
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <ProfileImg src={icProfile} alt="프로필 이미지" />
              <div
                style={{
                  marginLeft: "10px",
                  width: "100%",
                  borderRight: `1px solid ${palette.gray200}`,
                }}
              >
                <ProductOwnerName>
                  {!isLoading ? data?.ownerNickname : "..."}
                </ProductOwnerName>
                <ProductDate>
                  {productInfo.updatedAt.slice(0, 10).replaceAll("-", ". ")}
                </ProductDate>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <Heart>
                  {!isLoading && data?.isFavorite ? (
                    <img src={icHeartActive} alt="좋아요 이미지" />
                  ) : (
                    <img src={icHeartInactive} alt="좋아요 이미지" />
                  )}
                  <HeartCount>{productInfo.favoriteCount}</HeartCount>
                </Heart>
              </div>
            </div>
          </ProductTextBox>
        </ProductInfoBox>
        <Inquiry id={productId} />
      </div>
    </>
  );
}
