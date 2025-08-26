import { useRef, useState } from "react";
import PlusIcon from "../../assets/images/ic_plus.svg";
import Xicon from "../../assets/images/ic_X.svg";
import ProductTitle from "../../components/product/ProductTitle";

export default function AddItemImg() {
  const ImageRef = useRef(null);
  const [img, setImg] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  const onUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return (reader.onload = () => {
      setImageSrc(reader.result || null);
      setImg(true);
    });
  };

  const DeletImg = () => {
    setImageSrc(null);
    setImg(false);
  }

  return (
    <div className="AddItemImg">
      <ProductTitle>상품 이미지</ProductTitle>
      <div className="AddItemImgMain">
        <button onClick={() => ImageRef.current.click()}>
          <img src={PlusIcon} alt="이미지 추가 아이콘" />
          이미지 등록
        </button>
        <input ref={ImageRef} type="file" onChange={(e) => onUpload(e)} />
        {img && <div className="AddItemImg-img">
          <img src={imageSrc} alt="추가한이미지미리보기" />
          <button onClick={DeletImg}>
            <img src={Xicon} alt="미리보기이미지닫기" />
          </button>
        </div>}
      </div>
    </div>
  );
}
