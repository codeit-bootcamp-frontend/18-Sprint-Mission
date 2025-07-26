import { useEffect, useState } from "react";

const useGetBestProductData = ({ pageSize = "4" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://panda-market-api.vercel.app/products?orderBy=favorite&pageSize=${pageSize}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err);
        console.error("베스트 상품 데이터 가져오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [pageSize]);

  return { products, loading, error };
};

export default useGetBestProductData;