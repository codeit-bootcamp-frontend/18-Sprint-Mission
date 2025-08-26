import { useState } from "react";
import Header from "../../components/header/Header";
import AddItemImg from "./AddItemImg";
import AddItemIntroduce from "./AddItemIntroduce";
import AddItemPrice from "./AddItemPrice";
import AddItemTag from "./AddItemTag";
import AddItemTitle from "./AddItemTitle";
import AddItemTop from "./AddItemTop";
import "./PandaAddItem.css";

export default function PandaAddItem() {
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");

  return (
    <>
      <Header />
      <div className="panda-additem-main">
        <AddItemTop />
        <AddItemImg />
        <AddItemTitle title={title} setTitle={setTitle} />
        <AddItemIntroduce intro={intro} setIntro={setIntro} />
        <AddItemPrice price={price} setPrice={setPrice} />
        <AddItemTag tag={tag} setTag={setTag} />
      </div>
    </>
  );
}
