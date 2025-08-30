import ProductTitle from "../../components/product/ProductTitle";
import { AddItemInput } from "./AddItemInput";

export default function AddItemPrice({ price, setPrice }) {
  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');

    if (rawValue === '') {
      setPrice('');
      return;
    }

    const formattedValue = Number(rawValue).toLocaleString('ko-KR');
    setPrice(formattedValue);
  };
  return (
    <div>
      <ProductTitle>판매가격</ProductTitle>
      <AddItemInput
        value={price}
        onChange={handleChange}
        type="text"
        placeholder="판매 가격을 입력해주세요"
      />
    </div>
  );
}
