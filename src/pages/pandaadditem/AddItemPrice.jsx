import ProductTitle from "../../components/product/ProductTitle";
import { AddItemInput } from "./AddItemInput";

export default function AddItemPrice({ price, setPrice }) {
  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  return (
    <div>
      <ProductTitle>판매가격</ProductTitle>
      <AddItemInput
        value={price}
        onChange={handleChange}
        type="number"
        placeholder="판매 가격을 입력해주세요"
      />
    </div>
  );
}
