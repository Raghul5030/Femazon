import React from "react";
import { useCart } from "../context/CartContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  if (!wishlist || wishlist.length === 0) {
    return <h2 style={{ padding: 30 }}>Your wishlist is empty ❤️</h2>;
  }

  return (
    <div style={{ padding: 30 }}>
      <h2>Your Wishlist</h2>

      {wishlist.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: 20,
            marginTop: 20,
            padding: 20,
            borderRadius: 12,
            background: "#fff",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{ width: 120, borderRadius: 10 }}
          />

          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button onClick={() => addToCart(item)}>Add to Bag</button>
            <br />
            <button
              style={{ marginTop: 10, background: "#999" }}
              onClick={() => removeFromWishlist(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
