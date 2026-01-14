import React from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, onAdd }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useCart();

  // Safety check: ensure product exists
  if (!product) {
    return null;
  }

  const isLiked = wishlist.some((item) => item.id === product.id);

  const handleWishlist = (e) => {
    e.stopPropagation();
    if (isLiked) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-card-luxury" style={cardContainer}>
      {/* Wishlist Heart Icon */}
      <div
        onClick={handleWishlist}
        style={heartContainer}
        className={`heart-icon ${isLiked ? "active" : ""}`}
      >
        <svg
          width="20"
          height="18"
          viewBox="0 0 24 22"
          fill={isLiked ? "#7a0f2b" : "none"}
          stroke={isLiked ? "#7a0f2b" : "#666"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "all 0.3s ease" }}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>

      <div style={imageViewport} className="image-viewport">
        <img src={product.image} alt={product.name} style={productImg} />
      </div>

      <div style={infoArea}>
        <div style={row}>
          <span style={categoryTag}>{product.category || "Luxury"}</span>
          <span style={priceTag}>₹{product.price}</span>
        </div>
        <h3 style={productTitle}>{product.name}</h3>
        <button onClick={() => onAdd(product)} style={addButton}>
          ADD TO BAG
        </button>
      </div>
    </div>
  );
}

/* LUXURY STYLING */
const cardContainer = {
  position: "relative",
  background: "#fff",
  transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
  overflow: "hidden"
};

const heartContainer = {
  position: "absolute",
  top: "15px",
  right: "15px",
  cursor: "pointer",
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "35px",
  height: "35px",
  background: "rgba(255, 255, 255, 0.8)",
  borderRadius: "50%",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease"
};

const imageViewport = {
  aspectRatio: "3 / 4",
  overflow: "hidden",
  background: "#f8f8f8",
  borderRadius: "12px",
  marginBottom: "15px"
};

const productImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)"
};

const infoArea = { padding: "0 8px" };
const row = { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" };
const categoryTag = { fontSize: "10px", letterSpacing: "1.5px", color: "#888", textTransform: "uppercase", fontWeight: "500" };
const priceTag = { fontSize: "15px", fontWeight: "600", color: "#1a1a1a" };
const productTitle = { fontFamily: "'Playfair Display', serif", fontSize: "19px", fontWeight: "400", margin: "0 0 15px 0", color: "#333", letterSpacing: "0.5px" };
const addButton = {
  width: "100%",
  background: "#1a1a1a",
  color: "#fff",
  border: "none",
  padding: "14px",
  borderRadius: "8px",
  fontSize: "11px",
  letterSpacing: "2.2px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "all 0.3s ease",
  textTransform: "uppercase"
};
