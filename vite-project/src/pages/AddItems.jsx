import React from "react";
import Header from "../components/common/Header";
import ButtonLink from "../components/common/ButtonLink";
import Input from "../components/addItem/Input";
import { INPUT_OPTIONS } from "../constant/INPUT_OPTIONS";

const styles = {
  fontBase: "text-lg font-bold",
  inputContainer: "flex flex-col gap-4",
  head: "flex justify-between",
};

const AddItems = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className={styles.head}>
          <h1 className={`${styles.fontBase} text-xl`}>상품 등록하기</h1>
          <ButtonLink>등록</ButtonLink>
        </div>
        {INPUT_OPTIONS.map((option) => (
          <div key={option.title} className={`${styles.inputContainer}`}>
            <label className={styles.fontBase} htmlFor={option.title}>
              {option.title}
            </label>
            <Input
              placeholder={option.placeholder}
              inputTypeStyle={option.inputTypeStyle}
              as={option.tagName}
              type={option.inputType}
              name={option.title}
              src={option.src}
              alt={option.alt}
            ></Input>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddItems;
