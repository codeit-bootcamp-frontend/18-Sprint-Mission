import styled from "styled-components";
import Icon from "../Icon";
import { convertPxToRem } from "@/styles/utils/convert.utils";

const CardWrapper = styled.li`
  display: flex;
  flex-flow: column nowrap;
  gap: ${convertPxToRem(16)} 0;
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  &::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
  & img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    border-radius: ${convertPxToRem(16)};
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: ${convertPxToRem(6)} 0;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0 ${convertPxToRem(4)};
`;

/**
 * 상품 카드 리스트를 출력하는 컴포넌트
 *
 * API 데이터 구조
 * @param {{
 *   products: Array<{
 *     id: string | number,
 *     images: string[],
 *     name: string,
 *     price: number | string,
 *     favoriteCount: number
 *   }>
 * }} props
 * @returns {JSX.Element}
 */
const ProductItem = ({ products }) => {
  return (
    <>
      {products.map(({ id, images, name, price, favoriteCount }) => {
        return (
          <CardWrapper key={id}>
            <ImgWrapper>
              <img src={images[0]} alt={name} />
            </ImgWrapper>
            <CardContent>
              <div className="txt-md font-weight-500">{name}</div>
              <div className="txt-lg font-weight-700">
                {price.toLocaleString()}원
              </div>
              <IconWrapper>
                <Icon iconName="like" size="sm"></Icon>
                <span className="txt-xs font-weight-500 fc-gray600">
                  {favoriteCount}
                </span>
              </IconWrapper>
            </CardContent>
          </CardWrapper>
        );
      })}
    </>
  );
};
export default ProductItem;
