// components/BestItem/BestItem.jsx
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getBestProducts } from "../../api/products";

const BestItem = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getBestProducts(4); // 4개만 가져오기
        setBestProducts(data.list || []);
      } catch (err) {
        setError(err.message);
        console.error("Best products fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBestProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-8">
        <h2
          id="best-products-heading"
          className="text-xl font-bold text-gray-900 mb-6"
        >
          베스트 상품
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[...Array(4)].map((_, index) => (
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {bestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestItem;
