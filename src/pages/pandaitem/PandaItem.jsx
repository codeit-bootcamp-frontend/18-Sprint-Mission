import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProductsItem,
  getProductsItemComments,
} from "../../api/getProductsItem";
import Header from "../../components/header/Header";
import "./PandaItem.css";
import PandaItemComment from "./PandaItemComment";
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
  const [list, setList] = useState([]);
  const sortedLists = list.sort((a, b) => b["updatedAt"] - a["updatedAt"]);
  const { id } = useParams();

  useEffect(() => {
    const handelLoad = async () => {
      const body = await getProductsItem({ id });
      const { list } = await getProductsItemComments({ id });
      setItem(body);
      setList(list);
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
        <PandaItemComment item={sortedLists} />
      </div>
    </>
  );
}
