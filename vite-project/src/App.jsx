import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/common/Header";
import ProductGrid from "./components/common/ProductGrid";
import getProductLists from "./services/getProductLists";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { list } = await getProductLists();
    setProducts(list);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header></Header>
      <ProductGrid products={products} />
    </>
  );
}

export default App;
