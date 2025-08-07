import styled from "styled-components";

const StyledProductDetailSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    color: var(--color-secondary-800);
    margin: 0;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    color: var(--color-secondary-600);
    margin: 0;
  }

  @media (max-width: 1199px) {
    gap: 8px;

    h3 {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

function ProductDetailSection({ title, description, children }) {
  return (
    <StyledProductDetailSection>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </StyledProductDetailSection>
  );
}

export default ProductDetailSection;
