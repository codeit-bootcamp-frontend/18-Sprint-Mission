import React, { useEffect } from "react";
import ItemCard from "../../../common/ItemCard/ItemCard";
import IsLoading from "../../../common/State/IsLoading";
import IsError from "../../../common/State/IsError";
import useDeviceType from "../../../../hooks/dom/useDeviceType";
import "./BestProductSectionStyle.css";

const BestProductSection = ({
  products,
  isLoading,
  isError,
  setBestPageSize,
}) => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  useEffect(() => {
    if (isDesktop) setBestPageSize("4");
    else if (isTablet) setBestPageSize("2");
    else if (isMobile) setBestPageSize("1");
  }, [isMobile, isTablet, isDesktop, setBestPageSize]);

  return (
    <section className="best-products">
      <h1 className="best-products-title">베스트 상품</h1>
      <article className="best-products-wrapper">
        {/* isLoading, isError 상태 렌더링 */}
        {isLoading && <IsLoading type="BEST" />}
        {isError && (
          <IsError message="베스트 상품을 불러오는데 실패했습니다." />
        )}

        {products?.list?.map((product) => (
          <ItemCard
            key={product.id}
            img={product.images[0]}
            type="BEST"
            title={product.name}
            price={product.price}
            heartCount={product.favoriteCount}
          />
        ))}
      </article>
    </section>
  );
};

export default BestProductSection;
