import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import AddItemImg from "./AddItemImg";
import AddItemIntroduce from "./AddItemIntroduce";
import AddItemPrice from "./AddItemPrice";
import AddItemTag from "./AddItemTag";
import AddItemTitle from "./AddItemTitle";
import AddItemTop from "./AddItemTop";
import "./PandaAddItem.css";

export default function PandaAddItem() {
  const [formData, setFormData] = useState({
    img: "",
    title: "",
    intro: "",
    price: "",
    tag: "",
  });
  const [submit, setSubmit] = useState(true);

  const updateImg = (newImg) => {
    setFormData((prev) => ({
      ...prev,
      img: newImg,
    }));
  };

  const updateTitle = (newTitle) => {
    setFormData((prev) => ({
      ...prev,
      title: newTitle,
    }));
  };

  const updateIntro = (newIntro) => {
    setFormData((prev) => ({
      ...prev,
      intro: newIntro,
    }));
  };

  const updatePrice = (newPrice) => {
    setFormData((prev) => ({
      ...prev,
      price: newPrice,
    }));
  };

  const updateTag = (newTag) => {
    setFormData((prev) => ({
      ...prev,
      tag: newTag,
    }));
  };

  useEffect(() => {
    if (
      formData.title !== "" &&
      formData.intro !== "" &&
      formData.price !== "" &&
      formData.tag !== ""
    ) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [formData]);

  return (
    <>
      <Header />
      <div className="panda-addItem-main">
        <AddItemTop submit={submit} />
        <AddItemImg img={formData.img} setImg={updateImg} />
        <AddItemTitle title={formData.title} setTitle={updateTitle} />
        <AddItemIntroduce intro={formData.intro} setIntro={updateIntro} />
        <AddItemPrice price={formData.price} setPrice={updatePrice} />
        <AddItemTag tag={formData.tag} setTag={updateTag} />
      </div>
    </>
  );
}
