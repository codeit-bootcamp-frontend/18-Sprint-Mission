import styled from "styled-components";
import typography from "@/styles/utils/typography";
import Midia from "@/styles/utils/media";
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
  transition: all 0.2s;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${CardItemWrapper}:hover & {
    opacity: 0.8;
  }
  ${Midia("sm")} {
    border-radius: 12px;
  }
`;

const CardInfo = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 6px 0;
  word-break: break-all;
`;

const CardTitle = styled.div`
  ${typography["text-md-medium"]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

const CardView = styled.a`
  display: block;
`;

const CardItem = ({ images, name, price, favoriteCount }) => {
  const thumbnailUrl = images && images.length > 0 ? images[0] : defaultImg;
  const handleImgError = e => {
    e.target.src = defaultImg;
  };
  return (
    <>
      <CardItemWrapper>
        <CardView>
          <CardThumbnail>
            <img src={thumbnailUrl} alt={name} onError={handleImgError} />
          </CardThumbnail>
          <CardInfo>
            <CardTitle>{name}</CardTitle>
            <CardPrice>{price.toLocaleString()}원</CardPrice>
            <CardLikes>
              <Icon size="xxs" icon="like" alt="좋아요 갯수" />
              <span className="count">{favoriteCount}</span>
            </CardLikes>
          </CardInfo>
        </CardView>
      </CardItemWrapper>
    </>
  );
};

export default CardItem;
