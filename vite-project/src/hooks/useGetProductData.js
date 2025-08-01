import { useEffect, useState } from "react";

const useGetProductData = ({ page = "1", pageSize = "10", orderBy = "latest", keyword = "" }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams();
    params.append('page', page);
    params.append('pageSize', pageSize);
    params.append('orderBy', orderBy);
    if (keyword) params.append('keyword', keyword);

    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products?${params}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setIsError(err);
        console.error("전체 상품 데이터 가져오기 실패:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [page, pageSize, orderBy, keyword]);

  return { products, isLoading, isError };
};

export default useGetProductData;