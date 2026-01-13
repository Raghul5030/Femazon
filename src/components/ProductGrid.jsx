import products from "../data/products";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

export default function ProductGrid() {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "24px",
        marginTop: "20px",
      }}
    >
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onAdd={addToCart}
        />
      ))}
    </div>
  );
}
