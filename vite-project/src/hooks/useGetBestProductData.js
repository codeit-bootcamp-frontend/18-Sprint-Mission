import { useEffect, useState } from "react";

const useGetBestProductData = ({ pageSize = "4" }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/products?orderBy=favorite&pageSize=${pageSize}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setIsError(err);
        console.error("베스트 상품 데이터 가져오기 실패:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [pageSize]);

  return { products, isLoading, isError };
};

export default useGetBestProductData;