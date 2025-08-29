import { useEffect, useState } from "react";
import getProductLists from "../services/getProductLists";

export default function useGetProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { list } = await getProductLists();
    setProducts(list);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, setProducts };
}
