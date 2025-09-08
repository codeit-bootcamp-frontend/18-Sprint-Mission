import Button from "../components/Button";
import InputGroup from "../components/inputGroup";
import TagGroup from "../components/TagGroup";
import form from "../assets/scss/form.module.scss";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

function AddItem() {
  const [productName, setProductName] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [price, setPrice] = useState("");
  const [tagArr, setTagArr] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const handelKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault(); // 엔터로 폼 전송 막기
    }
  };
  const handleSubmit = (e) => {
    alert("상품을 등록하였습니다.");
  };

  useEffect(() => {
    handleValueCheck();
  }, [productName, productInfo, price, tagArr]);

  //입력 끝나면 호출
  const handleDebouncedChange = useCallback(
    debounce((id, value) => {
      if (id === "productName") {
        setProductName(value);
      } else if (id === "productInfo") {
        setProductInfo(value);
      } else if (id === "price") {
        const number = value.replace(/,/g, ""); //계산오류방지 콤마 제거
        setPrice(number);
      }
      handleValueCheck();
    }, 300),
    []
  );

  //태그 생성
  const handleTagCreate = (value) => {
    let tagArr = [];
    tagArr.push(value);
    setTagArr((prevTagArr) => [...prevTagArr, value]);
    handleValueCheck();
  };

  //태그 삭제
  const handleTagDelete = (value) => {
    setTagArr((prevTagArr) => prevTagArr.filter((item) => item !== value));
    handleValueCheck();
  };

  //유효 체크
  const handleValueCheck = () => {
    if (!productName || !productInfo || !price || tagArr.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const commonProps = {
    formStyle: form,
    onChange: handleDebouncedChange,
    onKeyDown: handleTagCreate,
  };

  return (
    <section className="section section-1">
      <div className="inner">
        <form onSubmit={handleSubmit} onKeyDown={handelKeyDown}>
          <div className={form.formWrap}>
            <div className="sectionTitleWrap">
              <h2 className="sectionTitle">상품 등록하기</h2>
              <Button
                className="button small-round"
                isDisabled={isDisabled}
                type={"submit"}
              >
                등록
              </Button>
            </div>
            <InputGroup
              title={"상품이미지"}
              id={"productImage"}
              type={"file"}
              {...commonProps}
            />
            <InputGroup
              title={"상품명"}
              id={"productName"}
              type={"text"}
              placeholder={"상품명을 입력해 주세요"}
              {...commonProps}
            />
            <InputGroup
              title={"상품소개"}
              id={"productInfo"}
              type={null}
              placeholder={"상품소개를 입력해 주세요."}
              {...commonProps}
            />
            <InputGroup
              title={"판매가격"}
              id={"price"}
              type={"text"}
              placeholder={"판매가격을 입력해 주세요."}
              {...commonProps}
            />
            <div className={form.tagWrap}>
              <InputGroup
                title={"태그"}
                id={"tag"}
                type={"text"}
                placeholder={"태그를 입력해 주세요."}
                {...commonProps}
              />
              <TagGroup tagArr={tagArr} deleteTag={handleTagDelete} />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddItem;
