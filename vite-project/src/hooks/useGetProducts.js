import { useEffect, useState } from "react";
import getProductLists from "../services/getProductLists";
import none_icon from "../assets/none_icon.png";

const loadImg = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      resolve(url);
    };
    img.onerror = () => {
      reject(none_icon);
    };
  });
};

export default function useGetProducts({
  currentPage = 1,
  orderBy = "recent",
  pageSize = 10,
}) {
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleLoad = async () => {
      const [recent] = await Promise.all([
        getProductLists(currentPage, pageSize, orderBy),
      ]);
      setTotalProductCount(recent.totalCount);

      const validImagePromises = recent.list.map((product) =>
        loadImg(product.images[0]).catch(() => none_icon)
      );
      const validUrls = await Promise.all(validImagePromises);
      console.log(validUrls);

      const validProducts = recent.list.map((product, index) => ({
        ...product,
        images: [validUrls[index]],
      }));

      setProducts(validProducts);
    };

    handleLoad();
  }, [currentPage, orderBy, pageSize]);

  return { products, totalProductCount };
}
