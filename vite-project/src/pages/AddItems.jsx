import { useEffect, useRef, useState } from "react";
import ButtonLink from "../components/common/ButtonLink";
import Input from "../components/addItem/Input";
import { INPUT_OPTIONS } from "../constant/INPUT_OPTIONS";

const styles = {
  fontBase: "text-lg font-bold",
  inputContainer: "flex flex-col gap-4",
  head: "flex justify-between",
};

const AddItems = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [hashtags, setHashtags] = useState([]);
  const inputRefs = useRef({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
      const newURL = URL.createObjectURL(file);
      setPreviewImage(newURL);
    }
  };

  const addToRefs = (el) => {
    if (el) {
      inputRefs.current[el.name] = el;
    }
  };

  const handleRemoveImage = () => {
    URL.revokeObjectURL(previewImage);
    setPreviewImage(null);
    inputRefs.current.product_image.value = "";
  };

  const handleHashTagEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = e.target.value.trim();
      if (newTag && !hashtags.includes(newTag)) {
        setHashtags((prev) => [...prev, newTag]);
        e.target.value = "";
        handleInputChange();
      }
    }
  };

  const handleRemoveHashtag = (tagToRemove) => {
    setHashtags(hashtags.filter((tag) => tag !== tagToRemove));
    handleInputChange();
  };

  // 유효성 검사 함수
  const isFormValid = () => {
    const refs = inputRefs.current;
    const isNameValid = refs.product_name?.value.trim() !== "";
    const isDescriptionValid = refs.product_description?.value.trim() !== "";
    const isPriceValid = refs.sales_price?.value.trim() !== "";
    const areHashtagsValid = hashtags.length > 0;

    return (
      isNameValid && isDescriptionValid && isPriceValid && areHashtagsValid
    );
  };

  useEffect(() => {
    setIsValid(isFormValid());
  }, [hashtags, previewImage]);

  // 텍스트 입력 시 유효성 검사
  const handleInputChange = () => {
    setIsValid(isFormValid());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      product_image: inputRefs.current.product_image?.files[0],
      product_name: inputRefs.current.product_name?.value,
      product_description: inputRefs.current.product_description?.value,
      sales_price: inputRefs.current.sales_price?.value,
      hashtag: hashtags,
    };
    console.log("$전송할 데이터", formData);
  };

  return (
    <form className="mb-28">
      <div className="flex flex-col gap-6">
        <div className={styles.head}>
          <h1 className={`${styles.fontBase} text-xl`}>상품 등록하기</h1>
          <ButtonLink
            btnStyle={isValid ? "active" : "inactive"}
            disabled={!isValid}
            onClick={handleSubmit}
          >
            등록
          </ButtonLink>
        </div>
        {INPUT_OPTIONS.map((option) => (
          <div key={option.title} className={`${styles.inputContainer}`}>
            <label className={styles.fontBase} htmlFor={option.id}>
              {option.title}
            </label>
            <Input
              ref={addToRefs}
              imgUrl={previewImage}
              placeholder={option.placeholder}
              inputTypeStyle={option.inputTypeStyle}
              as={option.tagName}
              type={option.inputType}
              name={option.id}
              src={option.src}
              alt={option.alt}
              id={option.id}
              onChange={
                option.inputType === "file"
                  ? handleFileChange
                  : handleInputChange
              } // 파일일 경우 file handler, 텍스트일 경우 text handler
              onClick={handleRemoveImage}
              onKeyDown={handleHashTagEnter}
            ></Input>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        {hashtags.map((tag, index) => (
          <div
            key={index}
            className="rounded-full bg-gray-100 py-[5px] gap-2 px-3 flex justify-center items-center"
          >
            <span>{`#${tag}`}</span>
            <button onClick={() => handleRemoveHashtag(tag)}>
              <img src="/ic_X.svg" alt="삭제 아이콘" />
            </button>
          </div>
        ))}
      </div>
    </form>
  );
};

export default AddItems;
