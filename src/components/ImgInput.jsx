import { memo, useRef, useState } from "react";
import styled from "styled-components";
import { palette } from "../styles/commonStyles";
import icPlus from "../assets/icons/ic_plus.svg";
import icX from "../assets/icons/ic_X.svg";

/**
 * input 태그를 감싸는 label
 */
const ImgUpload = styled.label`
  width: 282px;
  height: 282px;
  color: ${palette.gray400};
  background-color: ${palette.gray100};
  background-image: url(${icPlus});
  background-repeat: no-repeat;
  background-position: center 90px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: inline-block;
  padding-top: 160px;
  text-align: center;

  @media (max-width: 1200px) {
    width: 168px;
    height: 168px;
    background-position: center 40px;
    padding-top: 100px;
  }
`;

/**
 * 이미지 미리보기를 표출
 */
const ProductPreviewImg = styled.img`
  width: 282px;
  height: 282px;
  border-radius: 12px;
  margin-left: 30px;
  position: relative;

  @media (max-width: 1200px) {
    width: 168px;
    height: 168px;
    margin-left: 10px;
  }
`;

/**
 * 이미지를 삭제할 버튼
 */
export const DeleteButton = styled.button`
  width: 22px;
  height: 24px;
  border-radius: 999px;
  border: none;
  background-color: ${palette.gray400};
  background-image: url(${icX});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  z-index: 8888;
  transform: translate(-150%, 50%);
`;

/**
 * 이미지 등록 버튼을 표출하는 컴포넌트
 */
const ImgInput = ({ isUpload, setIsUpload }) => {
  /**
   * 미리보기 이미지 문자열을 담는다.
   */
  const [imgPreviews, setImgPreviews] = useState("");
  const inputRef = useRef();

  /**
   * 업로드한 이미지의 정보를 URL 문자열로 변환
   * @param {event} e
   */
  const onChangeUploadImg = (e) => {
    if (imgPreviews !== "") {
      return;
    }

    const previewImg = e.target.files[0];
    const imgLink = URL.createObjectURL(previewImg);
    setImgPreviews(imgLink);
  };

  /**
   * 미리보기 이미지를 지우는 함수
   * @param {Event} e
   */
  const onClickDeleteImg = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    setImgPreviews("");
    setIsUpload(false);
  };

  /**
   * 이미 등록된 이미지가 있을 때 업로드 상태를 true로 변경하는 함수
   */
  const onClickCheckImg = () => {
    if (imgPreviews !== "") {
      setIsUpload(true);
    }
  };

  return (
    <>
      <div>
        <ImgUpload htmlFor="imgUpload">이미지 등록</ImgUpload>
        <input
          id="imgUpload"
          type="file"
          accept="image/*"
          onClick={onClickCheckImg}
          onChange={onChangeUploadImg}
          ref={inputRef}
          style={{ display: "none" }}
          disabled={isUpload}
        />
      </div>
      {imgPreviews && (
        <div>
          <ProductPreviewImg src={imgPreviews} alt="이미지 미리보기" />
          <DeleteButton onClick={onClickDeleteImg}></DeleteButton>
        </div>
      )}
    </>
  );
};

export default memo(ImgInput);
