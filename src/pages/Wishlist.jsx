import React from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishlist, addToCart } = useCart();

  return (
    <div className="page-reveal" style={pageContainer}>
      {/* Header Section */}
      <section style={headerSection}>
        <h1 style={pageTitle}>Your Wishlist</h1>
        <p style={pageSubtitle}>Pieces you love</p>
      </section>

      {/* Wishlist Grid */}
      <section style={wishlistSection}>
        {wishlist.length > 0 ? (
          <div style={productsGrid}>
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={addToCart}
              />
            ))}
          </div>
        ) : (
          <div style={emptyContainer}>
            <h2 style={emptyTitle}>Your wishlist is empty</h2>
            <p style={emptyText}>Explore our collection and find something special.</p>
            <Link to="/products">
              <button style={exploreBtn}>Start Shopping</button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

/* LUXURY STYLING */
const pageContainer = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "40px 20px",
  minHeight: "70vh",
};

const headerSection = {
  textAlign: "center",
  marginBottom: "60px",
  borderBottom: "1px solid #eee",
  paddingBottom: "40px",
};

const pageTitle = {
  fontSize: "42px",
  fontWeight: "300",
  margin: "0 0 10px 0",
  color: "#1a1a1a",
  letterSpacing: "1px",
  fontFamily: "'Playfair Display', serif",
};

const pageSubtitle = {
  fontSize: "14px",
  color: "#888",
  textTransform: "uppercase",
  letterSpacing: "3px",
};

const wishlistSection = {
  minHeight: "400px",
};

const productsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "30px",
};

const emptyContainer = {
  textAlign: "center",
  padding: "100px 20px",
};

const emptyTitle = {
  fontSize: "24px",
  marginBottom: "15px",
  color: "#333",
};

const emptyText = {
  fontSize: "16px",
  color: "#666",
  marginBottom: "30px",
};

const exploreBtn = {
  background: "#1a1a1a",
  color: "#fff",
  padding: "15px 40px",
  borderRadius: "8px",
  fontSize: "12px",
  letterSpacing: "2px",
  cursor: "pointer",
  border: "none",
  textTransform: "uppercase",
};

