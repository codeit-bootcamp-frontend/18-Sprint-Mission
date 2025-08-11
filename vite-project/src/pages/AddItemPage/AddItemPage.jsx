import "../../components/reset.css";
import Styled from "styled-components";
import ProductAddHeader from "./ProducutAddHeader";
import ProductAddImg from "./ProductAddImg.jsx";
import ProductAddName from "./ProductAddName.jsx";
import ProductAddInt from "./ProductAddInt.jsx";
import ProductAddPrice from "./ProductAddPrice.jsx";
import ProductAddTag from "./ProductAddTag.jsx";
import { useState } from "react";

const FormContainer = Styled.form`
    display: flex;
  flex-direction: column;
  margin: 3rem auto;
  width: 120.6rem;
  gap: 2.4rem;

  @media (max-width: 1199px) {
  width: 69.6rem;
  }

  @media (max-width: 767px) {
  width: 34.6rem;
  }
  `;

function AddItemPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: "",
    tags: [],
  });

  const handleChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formValues.name.trim() !== "" &&
    formValues.description.trim() !== "" &&
    formValues.price.trim() !== "" &&
    formValues.tags.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    console.log("등록 데이터:", formValues); //submit 확인용
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <ProductAddHeader isFormValid={isFormValid} />
        <ProductAddImg onChange={(img) => handleChange("image", img)} />
        <ProductAddName
          value={formValues.name}
          onChange={(val) => handleChange("name", val)}
        />
        <ProductAddInt
          value={formValues.description}
          onChange={(val) => handleChange("description", val)}
        />
        <ProductAddPrice
          value={formValues.price}
          onChange={(val) => handleChange("price", val)}
        />
        <ProductAddTag onTagsChange={(tags) => handleChange("tags", tags)} />
      </FormContainer>
    </>
  );
}

export default AddItemPage;
