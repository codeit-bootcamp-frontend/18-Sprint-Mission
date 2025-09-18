import BestProduct from "../components/BestProductSection/BestProducts";
import useGetProducts from "../hooks/useGetProducts";
import Header from "../components/common/Header";
import Container from "../components/ProductListSection/Container";
import { useResponsivePage } from "../hooks/useResponsivePage";

const ProductList = () => {
  const responsiveValues = useResponsivePage();

  const { products: bestProducts } = useGetProducts({
    pageSize: responsiveValues.bestPageSize,
    orderBy: "favorite",
  });
  return (
    <>
      <div>
        <BestProduct products={bestProducts} />
        <Container
          pageSize={responsiveValues.pageSize}
          isMobile={responsiveValues.isMobile}
        />
      </div>
    </>
  );
};

export default ProductList;
