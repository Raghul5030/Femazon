import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "24px" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", borderRadius: "16px" }}
      />
      <h2>{product.name}</h2>
      <h3>₹{product.price}</h3>
      <p>{product.description}</p>
      <button>Add to Bag</button>
    </div>
  );
}
