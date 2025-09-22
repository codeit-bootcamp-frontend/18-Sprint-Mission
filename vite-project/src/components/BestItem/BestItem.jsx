// components/BestItem/BestItem.jsx - 반응형 개수 적용
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getBestProducts } from "../../api/products";
import useResponsiveCount from "../../hooks/useResponsiveCount";

const BestItem = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 반응형 훅 사용
  const { getBestProductCount, getGridClass } = useResponsiveCount();
  const productCount = getBestProductCount();
  const gridClass = getGridClass("best");

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        // 🎯 화면 크기에 따라 다른 개수 요청
        const data = await getBestProducts(productCount);
        setBestProducts(data.list || []);
      } catch (err) {
        setError(err.message);
        console.error("Best products fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBestProducts();
  }, [productCount]); // productCount가 변경되면 재요청

  if (loading) {
    return (
      <section className="py-8">
        <h2
          id="best-products-heading"
          className="text-xl font-bold text-gray-900 mb-6"
        >
          베스트 상품
        </h2>
        {/* 🎯 반응형 그리드 클래스 적용 */}
        <div className={gridClass}>
          {[...Array(productCount)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg h-64 animate-pulse"
            ></div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8">
        <h2
          id="best-products-heading"
          className="text-xl font-bold text-gray-900 mb-6"
        >
          베스트 상품
        </h2>
        <div className="text-center py-8 text-gray-500">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <h2
        id="best-products-heading"
        className="text-xl font-bold text-gray-900 mb-6"
      >
        베스트 상품
      </h2>
      {/* 🎯 반응형 그리드 + 반응형 개수 */}
      <div className={gridClass}>
        {bestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestItem;
