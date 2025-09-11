import { useEffect, useState } from "react";
import { getProductComments, getProductDetails } from "../../api";
import { useParams } from "react-router-dom";
import ItemInfo from "./ItemInfo";
import ItemComments from "./ItemComments";

export default function ItemDetailPage() {
  const [itemInfo, setItemInfo] = useState({});
  const [commentInfo, setCommentInfo] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    async function fetchData() {
      if (productId) {
        try {
          const [itemRes, commentRes] = await Promise.all([
            getProductDetails(productId),
            getProductComments(productId),
          ]);
          setItemInfo(itemRes);
          setCommentInfo(commentRes);
        } catch (error) {
          throw new Error(`상품을 불러오는데 실패했습니다 : ${error.message}`);
        }
      }
    }
    fetchData();
  }, [productId]);
  console.log(itemInfo);
  console.log(commentInfo);
  return (
    <>
      <div className="w-[1200px] h-[1257px] mx-auto">
        <ItemInfo
          images={itemInfo.images}
          name={itemInfo.name}
          price={itemInfo.price}
          description={itemInfo.description}
          favoriteCount={itemInfo.favoriteCount}
          tags={itemInfo.tags}
          nickname={itemInfo.ownerNickname}
          createdAt={itemInfo.createdAt}
        />
        <ItemComments commentInfo={commentInfo} />
      </div>
    </>
  );
}
