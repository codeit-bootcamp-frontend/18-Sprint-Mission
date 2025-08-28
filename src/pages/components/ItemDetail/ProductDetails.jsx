import { ItemsTag, palette, ProfileImg } from "../../../styles/commonStyles";
import {
  Heart,
  HeartCount,
  ProductDate,
  ProductOwnerName,
  ProductPrice,
  ProductSubTitle,
  ProductTextArea,
  ProductTextBox,
  ProductTitle,
} from "../../../styles/items/ItemDetailStyle";
import icProfile from "../../../assets/icons/ic_profile.svg";
import icHeartInactive from "../../../assets/icons/ic_heart_inactive_large.svg";
import icHeartActive from "../../../assets/icons/ic_heart_active_large.svg";
import KebabMenu from "../../../components/kebab/KebabMenu";

export default function ProductDetails({ data, productInfo, isLoading }) {
  return (
    <ProductTextBox>
      <div style={{ borderBottom: `1px solid ${palette.gray200}` }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ProductTitle>{productInfo.name}</ProductTitle>
          <KebabMenu />
        </div>
        <ProductPrice>
          {productInfo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            "원"}
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
  );
}
