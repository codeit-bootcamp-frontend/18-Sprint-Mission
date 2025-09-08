import BestProduct from "../components/BestProductSection/BestProduct";
import useGetProducts from "../hooks/useGetProducts";
import Header from "../components/common/Header";
import Container from "../components/ProductListSection/Container";
import { useResponsivePage } from "../hooks/useResponsivePage";

const ProductList = () => {
  const { pageSize, bestPageSize, isMobile } = useResponsivePage();

  const { products: bestProducts } = useGetProducts({
    pageSize: bestPageSize,
    orderBy: "favorite",
  });
  return (
    <>
      <Header />
      <div className="max-w-screen-xl px-4 mt-6 md:px-6 md:mx-auto">
        <BestProduct products={bestProducts} />
        <Container pageSize={pageSize} isMobile={isMobile} />
      </div>
    </>
  );
};

export default ProductList;
