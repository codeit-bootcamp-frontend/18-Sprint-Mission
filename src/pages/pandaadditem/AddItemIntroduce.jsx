import ProductTitle from "../../components/product/ProductTitle";
import { AddItemTextArea } from "./AddItemTextArea";

export default function AddItemIntroduce({intro, setIntro}) {
  const handleChange = (e) => {
    setIntro(e.target.value);
  }
  return (
    <div className="AddItemIntroduce">
      <ProductTitle>상품 소개</ProductTitle>
      <AddItemTextArea value={intro} onChange={handleChange} name="postContent" placeholder="상품 소개를 입력해주세요"/>
    </div>
  );
}
