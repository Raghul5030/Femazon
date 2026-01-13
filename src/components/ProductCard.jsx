import React, { useState } from "react";

export default function ProductCard({ product, onAdd, onWishlist }) {
  const [isLiked, setIsLiked] = useState(false);

  // Safety check: ensure product exists
  if (!product) {
    return null;
  }

  const handleWishlist = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    // FIXED: Added safety check to prevent "is not a function" error
    if (typeof onWishlist === "function") {
      onWishlist(product);
    }
  };

  return (
    <div style={cardContainer}>
      {/* Wishlist Heart Icon */}
      <div onClick={handleWishlist} style={{ ...heartIcon, color: isLiked ? "#7a0f2b" : "#ccc" }}>
        {isLiked ? "♥" : "♡"}
      </div>

      <div style={imageViewport}>
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
const cardContainer = { position: "relative", background: "#fff", transition: "0.3s" };
const heartIcon = { position: "absolute", top: "15px", right: "15px", fontSize: "20px", cursor: "pointer", zIndex: 10 };
const imageViewport = { aspectRatio: "3 / 4", overflow: "hidden", background: "#f8f8f8", borderRadius: "8px", marginBottom: "15px" };
const productImg = { width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)" };
const infoArea = { padding: "0 5px" };
const row = { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" };
const categoryTag = { fontSize: "10px", letterSpacing: "1.5px", color: "#888", textTransform: "uppercase" };
const priceTag = { fontSize: "14px", fontWeight: "600", color: "#1a1a1a" };
const productTitle = { fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: "400", margin: "0 0 15px 0", color: "#333" };
const addButton = { width: "100%", background: "#7a0f2b", color: "#fff", border: "none", padding: "12px", borderRadius: "4px", fontSize: "11px", letterSpacing: "2px", cursor: "pointer", fontWeight: "600" };