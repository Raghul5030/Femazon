import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { addToCart } = useCart();
  
  // High-end brands showcase a few 'hero' items differently
  const featuredProducts = products.slice(0, 4);
  const regularProducts = products.slice(4);

  return (
    <div className="page-reveal">
      {/* 1. EDITORIAL HERO SECTION */}
      <section style={heroSection}>
        <div style={heroContent}>
          <span style={heroSubtitle}>Spring / Summer 2026</span>
          <h1 style={heroTitle}>The Art of <br/> Women's fashion
          
          </h1>
          <p style={heroText}>
            Discover our curated collection of artisan cosmetics, 
            designed for the global modern aesthetic.
          </p>
          <Link to="/products">
            <button style={heroBtn}>Explore Collection</button>
          </Link>
        </div>
        <div style={heroImageWrapper}>
            {/* Replace with your high-res editorial image */}
            <img 
                src="heroimg.png" 
                alt="Editorial" 
                style={heroImg} 
            />
        </div>
      </section>

      {/* 2. BENTO CATEGORY GRID */}
      <section style={sectionMargin}>
        <div style={bentoGrid}>
            <div style={{...bentoItem, gridColumn: "span 2", backgroundImage: 'url(/skincare.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div style={bentoText}>
                    <h2 style={bentoTitle}>Skincare</h2>
                    <Link to="/products/skincare" style={bentoLink}>View More</Link>
                </div>
            </div>
            <div style={{...bentoItem, backgroundImage: 'url(/lips.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div style={bentoText}>
                    <h2 style={bentoTitle}>Lips</h2>
                    <Link to="/products/lips" style={bentoLink}>Shop</Link>
                </div>
            </div>
            <div style={{...bentoItem, background: "#7a0f2b", color: "white"}}>
                <div style={bentoText}>
                    <h2 style={{...bentoTitle, color: "white"}}>Studio</h2>
                    <Link to="/tryon" style={{...bentoLink, color: "white", borderBottomColor: "white"}}>AI Try-On</Link>
                </div>
            </div>
        </div>
      </section>

      {/* 3. REFINED PRODUCT LISTING */}
      <section style={sectionMargin}>
        <div style={sectionHeader}>
            <h2 style={sectionTitle}>The Essentials</h2>
            <Link to="/products" style={viewAll}>View All —&gt;</Link>
        </div>
        
        <div className="product-grid" style={luxuryGrid}>
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>
      </section>
    </div>
  );
}

/* LUXURY INLINE STYLES */
const heroSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  minHeight: "80vh",
  alignItems: "center",
  gap: "60px",
  marginBottom: "100px"
};

const heroContent = { paddingRight: "40px" };
const heroSubtitle = { textTransform: "uppercase", letterSpacing: "4px", fontSize: "12px", color: "#7a0f2b", fontWeight: "600" };
const heroTitle = { fontSize: "72px", lineHeight: "1.1", margin: "20px 0", color: "#1a1a1a" };
const heroText = { fontSize: "18px", color: "#666", maxWidth: "400px", marginBottom: "40px" };
const heroBtn = { padding: "18px 45px", fontSize: "12px" };

const heroImageWrapper = { height: "100%", overflow: "hidden" };
const heroImg = { width: "100%", height: "100%", objectFit: "cover" };

const sectionMargin = { marginBottom: "120px" };
const sectionHeader = { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", borderBottom: "1px solid #eee", paddingBottom: "20px" };
const sectionTitle = { fontSize: "32px" };
const viewAll = { textDecoration: "none", color: "#1a1a1a", fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px" };

const bentoGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "300px",
    gap: "20px"
};

const bentoItem = { position: "relative", padding: "40px", display: "flex", alignItems: "flex-end" };
const bentoText = { zIndex: 2 };
const bentoTitle = { fontSize: "24px", marginBottom: "10px" };
const bentoLink = { textDecoration: "none", color: "#1a1a1a", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #1a1a1a" };

const luxuryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "30px"
};