import styled from "styled-components";
import plusIcon from "../../assets/ic-plus.svg";
import xIcon from "../../assets/ic-x.svg";
import { useState, useRef } from "react";

const ProductAddImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const ProductAddImgTitle = styled.h1`
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--gray-800);
`;
const ProductAddImgFile = styled.label`
  width: 28.2rem;
  height: 28.2rem;
  border-radius: 1.2rem;
  background-color: var(--gray-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--gray-400);
  gap: 1rem;
  cursor: pointer;
  img {
    width: 4.8rem;
    height: 4.8rem;
  }
  input {
    display: none;
  }

  @media (max-width: 767px) {
    width: 16.8rem;
    height: 16.8rem;
  }
`;

const ProductAddImgFileDiv = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const PreviewWrapper = styled.div`
  position: relative;
`;

const PreviewImg = styled.img`
  width: 28.2rem;
  height: 28.2rem;
  border-radius: 1.2rem;
  border: 0.1rem solid var(--gray-50);
`;

const ClearBtn = styled.button`
  all: unset;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  cursor: pointer;

  img {
    width: 2.2rem;
    height: 2.4rem;
  }
`;

export default function ProductAddImg() {
  const [previewImg, setPreviewImg] = useState(null);
  const [showError, SetShowError] = useState(false);
  const inputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      SetShowError("이미지 파일만 업로드할 수 있습니다.");
      e.target.value = "";
      return;
    }
    SetShowError(null);
    inputRef.current = file;
    if (previewImg) URL.revokeObjectURL(previewImg);
    const url = URL.createObjectURL(file);
    setPreviewImg(url);
    e.target.value = "";
  };

  const handleClearClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setPreviewImg(null);
    SetShowError(false);
  };

  const handleInputClick = (e) => {
    if (previewImg) {
      e.preventDefault();
      SetShowError(true);
    }
  };

  return (
    <ProductAddImgDiv>
      <ProductAddImgTitle>상품 이미지</ProductAddImgTitle>
      <ProductAddImgFileDiv>
        <ProductAddImgFile htmlFor="ProductAddImgInput">
          <img src={plusIcon} alt="추가 아이콘" />
          이미지등록
          <input
            id="ProductAddImgInput"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            onClick={handleInputClick}
            ref={inputRef}
          />
        </ProductAddImgFile>
        {previewImg && (
          <PreviewWrapper>
            <PreviewImg src={previewImg} alt="미리보기 이미지" />
            <ClearBtn onClick={handleClearClick}>
              <img src={xIcon} alt="X 아이콘" />
            </ClearBtn>
          </PreviewWrapper>
        )}
      </ProductAddImgFileDiv>
      {showError && (
        <p style={{ fontWeight: "400", fontSize: "1.6rem", color: "#f74747" }}>
          *이미지 등록은 최대 1개까지 가능합니다.
        </p>
      )}
    </ProductAddImgDiv>
  );
}
