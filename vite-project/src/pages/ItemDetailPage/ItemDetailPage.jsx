import { useEffect, useState } from "react";
import { getProductDetail } from "../../api";
import { useParams } from "react-router-dom";
import ItemInfo from "./ItemInfo";

export default function ItemDetailPage() {
  const [itemInfo, setItemInfo] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    async function fetchData() {
      if (productId) {
        try {
          const ItemRes = await getProductDetail(productId);
          setItemInfo(ItemRes);
        } catch (error) {
          throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
        }
      }
    }
    fetchData();
  }, [productId]);
  console.log(itemInfo);
  return (
    <>
      <ItemInfo ItemImg={itemInfo.images} />
    </>
  );
}
