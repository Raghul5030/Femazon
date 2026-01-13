import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  // Generate a mock luxury order ID
  const orderId = "FEM-" + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="page-enter" style={successContainer}>
      <div style={innerBox}>
        {/* Animated Checkmark */}
        <div style={iconWrapper}>
          <span style={checkIcon}>✓</span>
        </div>

        <h1 style={title}>Order Confirmed</h1>
        <p style={subtitle}>Thank you for choosing Femazon. Your ritual is being prepared with care.</p>
        
        <div style={receiptBox}>
          <div style={receiptRow}>
            <span>Order Number</span>
            <span style={boldText}>{orderId}</span>
          </div>
          <div style={receiptRow}>
            <span>Status</span>
            <span style={{ color: "#7a0f2b", fontWeight: "600" }}>Processing</span>
          </div>
          <div style={receiptRow}>
            <span>Estimated Arrival</span>
            <span>2-4 Business Days</span>
          </div>
        </div>

        <div style={noteBox}>
          <p style={noteText}>
            A confirmation email has been sent to your inbox. 
            Once your items are dispatched, we will provide you with a global tracking link.
          </p>
        </div>

        <div style={btnGroup}>
          <Link to="/products">
            <button style={continueBtn}>Continue Shopping</button>
          </Link>
          <Link to="/">
            <button style={homeBtn}>Back to Homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* SUCCESS PAGE STYLES */
const successContainer = { 
  minHeight: "85vh", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center", 
  padding: "40px",
  background: "#fff"
};

const innerBox = { 
  maxWidth: "480px", 
  width: "100%", 
  textAlign: "center", 
  padding: "60px 40px",
  border: "1px solid #eee"
};

const iconWrapper = {
  width: "70px",
  height: "70px",
  background: "#fdf1f4",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 30px auto"
};

const checkIcon = { fontSize: "28px", color: "#7a0f2b" };

const title = { 
  fontFamily: "'Playfair Display', serif", 
  fontSize: "32px", 
  marginBottom: "15px",
  fontWeight: "400",
  letterSpacing: "1px"
};

const subtitle = { color: "#666", fontSize: "14px", lineHeight: "1.6", marginBottom: "40px" };

const receiptBox = { 
  background: "#fcfcfc", 
  padding: "25px", 
  textAlign: "left", 
  marginBottom: "30px",
  border: "1px solid #f0f0f0"
};

const receiptRow = { 
  display: "flex", 
  justifyContent: "space-between", 
  fontSize: "12px", 
  marginBottom: "12px",
  textTransform: "uppercase",
  letterSpacing: "1px"
};

const boldText = { fontWeight: "700", color: "#1a1a1a" };

const noteBox = { marginBottom: "40px" };
const noteText = { fontSize: "11px", color: "#999", lineHeight: "1.8", fontStyle: "italic" };

const btnGroup = { display: "flex", flexDirection: "column", gap: "10px" };

const continueBtn = { 
  width: "100%", 
  background: "#1a1a1a", 
  color: "white", 
  padding: "18px", 
  border: "none", 
  fontSize: "11px", 
  letterSpacing: "2px", 
  textTransform: "uppercase", 
  cursor: "pointer",
  transition: "0.3s"
};

const homeBtn = { 
  width: "100%", 
  background: "none", 
  color: "#1a1a1a", 
  padding: "10px", 
  border: "none", 
  fontSize: "11px", 
  textDecoration: "underline", 
  cursor: "pointer",
  letterSpacing: "1px"
};