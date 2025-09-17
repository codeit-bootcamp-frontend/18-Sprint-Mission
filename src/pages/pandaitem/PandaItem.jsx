import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProductsItem,
  getProductsItemComments,
} from "../../api/getProductsItem";
import returnIcon from "../../assets/images/return_icon.svg";
import Header from "../../components/header/Header";
import "./PandaItem.css";
import PandaItemComment from "./PandaItemComment";
import PandaItemCommentEmpty from "./PandaItemCommentEmpty";
import PandaItemCommnetTextArea from "./PandaItemCommnetTextArea";
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
  const { id } = useParams();
  const nav = useNavigate();

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
        <PandaItemCommnetTextArea />
        {list.length === 0 ? (
          <PandaItemCommentEmpty />
        ) : (
          <PandaItemComment item={list} />
        )}

        <div className="return_btn">
          <button className="nav_btn" onClick={() => nav("/items")}>
            목록으로 돌아가기
            <img src={returnIcon} alt="목록으로 돌아가기 버튼 아이콘" />
          </button>
        </div>
      </div>
    </>
  );
}
