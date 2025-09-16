import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsItem } from "../../api/getProductsItem";
import Header from "../../components/header/Header";
import "./PandaItem.css";
import PandaItemSection from "./PandaItemSection";

export default function PandaItem() {
  const [item, setItem] = useState({
    id: null,
    name: "",
    description: "",
    price: 0,
    tags: [],
    images: [],
    ownerId: null,
    favoriteCount: 0,
    createdAt: "",
    updatedAt: "",
    ownerNickname: "",
    isFavorite: false,
  });
  const { id } = useParams();

  useEffect(() => {
    const handelLoad = async () => {
      const body = await getProductsItem({ id });
      setItem(body);
    };
    handelLoad();
  }, [id]);

  if (!item) {
    return <p>상품 정보를 불러오는 중...</p>;
  }

  return (
    <>
      <Header />
      <div className="pandaitem_wrap">
        <PandaItemSection item={item} />
      </div>
    </>
  );
}
