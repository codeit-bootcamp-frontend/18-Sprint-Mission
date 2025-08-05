import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api/products";

function ItemDetailPage() {
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id).then((product) => console.log(product));
  }, [id]);

  return (
    <div>
      <h1>Item Detail Page</h1>
      {/* Add your item detail content here */}
    </div>
  );
}

export default ItemDetailPage;
