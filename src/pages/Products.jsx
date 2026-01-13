import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Makeup", "Skincare", "Haircare", "Fragrance"];
  
  const filteredProducts = filter === "All" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="page-reveal" style={pageContainer}>
      {/* Header Section */}
      <section style={headerSection}>
        <h1 style={pageTitle}>All Products</h1>
        <p style={pageSubtitle}>Discover our complete collection</p>
      </section>

      {/* Filter Section */}
      <section style={filterSection}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              ...filterBtn,
              ...(filter === cat ? filterBtnActive : {}),
            }}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Products Grid */}
      <section style={productsSection}>
        <div style={productsGrid}>
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAdd={addToCart} 
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <p style={emptyMessage}>No products found in this category.</p>
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
};

const headerSection = {
  textAlign: "center",
  marginBottom: "60px",
  borderBottom: "1px solid #eee",
  paddingBottom: "40px",
};

const pageTitle = {
  fontSize: "48px",
  fontWeight: "300",
  margin: "0 0 15px 0",
  color: "#1a1a1a",
  letterSpacing: "1px",
};

const pageSubtitle = {
  fontSize: "16px",
  color: "#666",
  textTransform: "uppercase",
  letterSpacing: "3px",
};

const filterSection = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginBottom: "60px",
  flexWrap: "wrap",
};

const filterBtn = {
  padding: "12px 30px",
  background: "transparent",
  border: "1px solid #ddd",
  color: "#666",
  cursor: "pointer",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  borderRadius: "30px",
  transition: "all 0.3s ease",
};

const filterBtnActive = {
  background: "#7a0f2b",
  color: "#fff",
  borderColor: "#7a0f2b",
};

const productsSection = {
  minHeight: "400px",
};

const productsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "30px",
};

const emptyMessage = {
  textAlign: "center",
  fontSize: "18px",
  color: "#999",
  marginTop: "60px",
};