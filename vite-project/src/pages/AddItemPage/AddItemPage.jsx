import "../../components/reset.css";
import Styled from "styled-components";
import ProductAddHeader from "./ProducutAddHeader";
import ProductAddImg from "./ProductAddImg.jsx";

function AddItemPage() {
  const FormContainer = Styled.form`
    display: flex;
  flex-direction: column;
  margin: 3rem auto;
  width: 120.6rem;
  gap: 2.4rem;
  `;
  return (
    <>
      <FormContainer>
        <ProductAddHeader />
        <ProductAddImg />
        <ProductAddName />
      </FormContainer>
    </>
  );
}

export default AddItemPage;
