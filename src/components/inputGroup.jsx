import { useRef, useState } from "react";
import Button from "../components/Button";
import plus from "../assets/images/ic_plus.svg";
import selfDelete from "../assets/images/selfDelete.svg";

//인풋 묶음
function InputGroup({
  id,
  title,
  type,
  placeholder = "",
  formStyle,
  onChange,
  onKeyDown,
}) {
  // 인풋 변경 감지
  const handleInputChange = (e) => {
    const value = e.target.value;
    const valueId = e.target.id;

    onChange(valueId, value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      if (value !== "") {
        onKeyDown(value);
        e.target.value = "";
      } else {
        return;
      }
    }
  };

  return (
    <div className={formStyle.inputGroup}>
      <h3 className={formStyle.inputTitle}>{title}</h3>
      <>
        {type == null ? (
          <TextArea
            id={id}
            placeholder={placeholder}
            onChange={handleInputChange}
            formStyle={formStyle}
          />
        ) : type == "file" ? (
          <ImageFileGroup
            id={id}
            placeholder={placeholder}
            formStyle={formStyle}
          />
        ) : (
          <TextInput
            id={id}
            type={type}
            placeholder={placeholder}
            formStyle={formStyle}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        )}
      </>
    </div>
  );
}

//텍스트 타입
function TextInput({ id, type, placeholder, formStyle, onChange, onKeyDown }) {
  const handleChange = (e) => {
    if (e.target.id === "price") {
      // 숫자 포멧
      const value = e.target.value;
      const onlyNumbers = value.replace(/[^0-9]/g, "");
      const formattedValue = onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      e.target.value = formattedValue;
    }
    onChange(e);
  };

  return (
    <div className={formStyle.inputBox}>
      <label className="hidden" htmlFor={id}>
        {placeholder}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...(id === "tag"
          ? { onKeyDown: onKeyDown, onChange: handleChange }
          : { onChange: handleChange })} //객체로 내려온것은 객체 안에서
      />
    </div>
  );
}

//파일 & 미리보기
function ImageFileGroup({ formStyle }) {
  const inputRef = useRef();
  const [preview, setPreview] = useState("");
  const [fileError, setFileError] = useState("");

  const handleInputChange = () => {
    if (!preview) {
      const value = inputRef.current.files[0]; //value
      setPreview(URL.createObjectURL(value));
    }
  };

  const handleInputClick = (e) => {
    if (preview) {
      e.preventDefault();
      setFileError("*이미지 등록은 최대 1개 까지 가능합니다.");
    }
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current; //노드애 직접 접근해 선택한 요소

    if (!inputNode) return;
    setPreview("");
    setFileError("");
    URL.revokeObjectURL(preview);
  };

  return (
    <div className={formStyle.imageFileGroup}>
      <label className={formStyle.box}>
        <input
          type="file"
          onChange={handleInputChange}
          onClick={handleInputClick}
          ref={inputRef}
        />
        <img src={plus} alt="이미지 등록" />
        <span>이미지 등록</span>
      </label>
      {preview && (
        <div className={`${formStyle.box} ${formStyle.imagePreview}`}>
          <img src={preview} alt="" />
          <Button
            className={formStyle.deleteButton}
            onClick={handleClearClick}
            type={"button"}
          >
            <img src={selfDelete} alt="삭제" />
          </Button>
        </div>
      )}
      {fileError && <p className={formStyle.errorMessage}>{fileError}</p>}
    </div>
  );
}

//텍스트 area
function TextArea({ id, placeholder, onChange, formStyle }) {
  return (
    <div className={formStyle.inputBox}>
      <label className="hidden" htmlFor={id}>
        {placeholder}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default InputGroup;
