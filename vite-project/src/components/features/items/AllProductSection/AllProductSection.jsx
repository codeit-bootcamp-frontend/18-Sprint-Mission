import React, { useEffect } from "react";
import ItemCard from "../../../common/ItemCard/ItemCard";
import IsLoading from "../../../common/State/IsLoading";
import IsError from "../../../common/State/IsError";
import useDeviceType from "../../../../hooks/dom/useDeviceType";
import OptionsBox from "../OptionsBox/OptionsBox";
import "./AllProductSectionStyle.css";

const AllProductSection = ({
  products,
  onOrderByChange,
  isLoading,
  isError,
  setAllPageSize,
}) => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  useEffect(() => {
    if (isDesktop) setAllPageSize("10");
    else if (isTablet) setAllPageSize("6");
    else if (isMobile) setAllPageSize("4");
  }, [isMobile, isTablet, isDesktop, setAllPageSize]);

  return (
    <section className="all-products">
      {/* 제목, 옵션 */}
      <OptionsBox onOrderByChange={onOrderByChange} isMobile={isMobile} />

      {/* isLoading, isError 상태 렌더링 */}
      {isLoading && <IsLoading type="ALL" />}
      {isError && <IsError message="전체 상품을 불러오는데 실패했습니다." />}

      <article className="all-products-wrapper">
        {products?.list?.map((product) => (
          <ItemCard
            key={product.id}
            img={product.images[0]}
            type="ALL"
            title={product.name}
            price={product.price}
            heartCount={product.favoriteCount}
          />
        ))}
      </article>
    </section>
  );
};

export default AllProductSection;
