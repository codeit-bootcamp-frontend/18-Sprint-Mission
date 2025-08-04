import { useMediaQuery } from 'react-responsive';
import Header from "../../components/header/Header";
import BestProducts from "../../components/product/BestProducts";
import ProductAll from "../../components/product/ProductAll";
import ProductPagination from "../../components/product/ProductPagination";
import "./PandaItems.css";

export default function PandaItems({
  items,
  bestitems,
  onClickNew,
  onClickLike,
}) {
  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1199 });
  const isPC = useMediaQuery({ minWidth: 1200 });

  const displayBestCount = isMobile ? 1 : isTablet ? 2 : isPC ? 4 : 4;
  const displayAllCount = isMobile ? 4 : isTablet ? 6 : isPC ? 10 : 10;
  return (
    <div className="product-wrap">
      <Header />
      <div className="main">
        <BestProducts bestitems={bestitems} displayCount={displayBestCount} />
        <ProductAll
          items={items}
          onClickNew={onClickNew}
          onClickLike={onClickLike}
          displayCount={displayAllCount}
          isMobile={isMobile}
        />
      </div>
      <ProductPagination />
    </div>
  );
}
