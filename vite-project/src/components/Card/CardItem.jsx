import styled from "styled-components";
import typography from "@/styles/utils/typography";
import Icon from "@/components/Icon";
import defaultImg from "/src/assets/items/img_default_product.svg";

const CardItemWrapper = styled.li`
  position: relative;
  width: 100%;
`;

const CardThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.07);
    }
  }
`;

const CardInfo = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 6px 0;
`;

const CardTitle = styled.div`
  ${typography["text-md-medium"]};
`;

const CardPrice = styled.div`
  ${typography["text-lg-bold"]};
`;

const CardLikes = styled.div`
  display: flex;
  align-items: center;
  gap: 0 4px;
  & .count {
    ${typography["text-xs-medium"]};
  }
`;

const CardItem = ({ imgUrl, title, price, likes }) => {
  const thumbnailUrl = imgUrl || defaultImg;
  const handleImgError = e => {
    e.target.src = defaultImg;
  };
  return (
    <>
      <CardItemWrapper>
        <CardThumbnail>
          <img src={thumbnailUrl} alt="상품 이미지" onError={handleImgError} />
        </CardThumbnail>
        <CardInfo>
          <CardTitle>{title}</CardTitle>
          <CardPrice>{price}</CardPrice>
          <CardLikes>
            <Icon size="xxs" icon="like" alt="좋아요 갯수" />
            <span className="count">{likes}</span>
          </CardLikes>
        </CardInfo>
      </CardItemWrapper>
    </>
  );
};

export default CardItem;
