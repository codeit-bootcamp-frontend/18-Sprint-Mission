import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { getProducts } from "../../api/getProducts";
import Header from "../../components/header/Header";
import BestProducts from "../../components/product/BestProducts";
import ProductAll from "../../components/product/ProductAll";
import ProductPagination from "../../components/product/ProductPagination";
import "./PandaItems.css";

export default function PandaItems() {
  const [order, setOrder] = useState("createdAt");
  const [bestorder] = useState("");
  const [items, setItems] = useState([]);
  const [bestitems, setBestItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const bestedItems = [...bestitems].sort(
    (a, b) => b[bestorder] - a[bestorder]
  );

  const handleNewestClick = () => setOrder("createdAt");
  const handleLikeClick = () => setOrder("favoriteCount");

  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1199 });
  const isPC = useMediaQuery({ minWidth: 1200 });

  const displayBestCount = isMobile ? 1 : isTablet ? 2 : isPC ? 4 : 4;
  const displayAllCount = isMobile ? 4 : isTablet ? 6 : isPC ? 10 : 10;

  useEffect(() => {
    const handleLoad = async () => {
      const { list } = await getProducts({ pageSize: displayAllCount });
      setItems(list);
      const { list: best } = await getProducts({ orderBy: "favorite", pageSize: displayBestCount});
      setBestItems(best);
    };
    handleLoad();
  }, [order,displayAllCount, displayBestCount]);

  return (
    <div className="product-wrap">
      <Header />
      <div className="main">
        <BestProducts bestitems={bestedItems} displayCount={displayBestCount} />
        <ProductAll
          items={sortedItems}
          onClickNew={handleNewestClick}
          onClickLike={handleLikeClick}
          isMobile={isMobile}
        />
      </div>
      <ProductPagination />
    </div>
  );
}
