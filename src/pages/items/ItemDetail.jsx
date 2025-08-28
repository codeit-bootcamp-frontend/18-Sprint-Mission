import { useLocation, useParams } from "react-router";
import { requestProductDetail } from "../../services/itemsApi";
import { ProductImg, ProductInfoBox } from "../../styles/items/ItemDetailStyle";

import Inquiry from "../../components/Inquiry";
import useService from "../../hooks/useService";
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
  const { data, isLoading } = useService(() => requestProductDetail(productId));

  return (
    <>
      <div style={{ width: "1200px", margin: "0 auto" }}>
        <ProductInfoBox>
          <ProductImg src={productInfo.images[0]} alt="상품 이미지" />
          <ProductDetails
            data={data}
            productInfo={productInfo}
            isLoading={isLoading}
          />
        </ProductInfoBox>
        <Inquiry id={productId} />
      </div>
    </>
  );
}
