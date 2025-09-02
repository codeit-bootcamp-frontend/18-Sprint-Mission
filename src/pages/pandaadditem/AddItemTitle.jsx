import ProductTitle from "../../components/product/ProductTitle";
import { AddItemInput } from "./AddItemInput";

export default function AddItemTitle({ title, setTitle }) {
  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  return (
    <div className="AddItemTitle">
      <ProductTitle>상품명</ProductTitle>
      <AddItemInput value={title} onChange={handleChange} type="text" placeholder="상품명을 입력해주세요" />
    </div>
  );
}
