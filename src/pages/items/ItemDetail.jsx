import { useLocation, useParams } from "react-router";
import { requestProductDetail } from "../../services/itemsApi";
import {
  ProductDetailContainer,
  ProductImg,
  ProductInfoBox,
} from "../../styles/items/ItemDetailStyle";

import Inquiry from "../../components/Inquiry";
import useFetch from "../../hooks/useService";
import ProductDetails from "../components/ItemDetail/ProductDetails";

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
  const { data, isLoading } = useFetch(() => requestProductDetail(productId));

  return (
    <>
      <ProductDetailContainer>
        <ProductInfoBox>
          <ProductImg src={productInfo.images[0]} alt="상품 이미지" />
          <ProductDetails
            data={data}
            productInfo={productInfo}
            isLoading={isLoading}
          />
        </ProductInfoBox>
        <Inquiry id={productId} />
      </ProductDetailContainer>
    </>
  );
}
