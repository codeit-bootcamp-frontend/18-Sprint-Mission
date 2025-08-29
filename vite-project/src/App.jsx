import "./App.css";
import Header from "./components/common/Header";
import ProductGrid from "./components/common/ProductGrid";
import useGetProducts from "./hooks/useGetProducts";

function App() {
  const { products, setProducts } = useGetProducts();

  return (
    <>
      <Header></Header>
      <ProductGrid products={products} />
    </>
  );
}

export default App;
