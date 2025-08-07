import "../../components/reset.css";
import Styled from "styled-components";
import ProductAddHeader from "./ProducutAddHeader";
import ProductAddImg from "./ProductAddImg.jsx";
import ProductAddName from "./ProductAddName.jsx";
import ProductAddInt from "./ProductAddInt.jsx";
import ProductAddPrice from "./ProductAddPrice.jsx";
import ProductAddTag from "./ProductAddTag.jsx";

const FormContainer = Styled.form`
    display: flex;
  flex-direction: column;
  margin: 3rem auto;
  width: 120.6rem;
  gap: 2.4rem;
  `;

function AddItemPage() {
  return (
    <>
      <FormContainer>
        <ProductAddHeader />
        <ProductAddImg />
        <ProductAddName />
        <ProductAddInt />
        <ProductAddPrice />
        <ProductAddTag />
      </FormContainer>
    </>
  );
}

export default AddItemPage;
