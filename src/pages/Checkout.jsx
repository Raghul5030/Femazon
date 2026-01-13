import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  // Calculating values directly to avoid ReferenceErrors
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = subtotal > 5000 ? 0 : 500;
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof clearCart === "function") clearCart();
    navigate("/success");
  };

  return (
    <div style={bg}>
      <div style={wrapper}>
        {/* Left Side: Form in white card style */}
        <div style={cardStyle}>
          <h2 style={head}>SHIPPING INFORMATION</h2>
          <form onSubmit={handleSubmit} style={form}>
            <div style={row}><input type="text" placeholder="FIRST NAME" required style={inp}/><input type="text" placeholder="LAST NAME" required style={inp}/></div>
            <input type="email" placeholder="EMAIL ADDRESS" required style={inp}/>
            <input type="text" placeholder="STREET ADDRESS" required style={inp}/>
            <h2 style={{...head, marginTop: '40px'}}>PAYMENT</h2>
            <input type="text" placeholder="CARD NUMBER" required style={inp}/>
            <button type="submit" style={btn}>PLACE ORDER — ₹{total}</button>
          </form>
        </div>

        {/* Right Side: Summary matching My Bag screen */}
        <aside style={{...cardStyle, flex: '0 0 400px'}}>
          <h2 style={head}>ORDER SUMMARY</h2>
          <div style={itemList}>
            {cart.map(item => (
              <div key={item.id} style={itemRow}>
                <img src={item.image} alt={item.name} style={thumb} />
                <div style={details}>
                  <p style={itemName}>{item.name.toUpperCase()}</p>
                  <p style={itemQty}>Qty: {item.qty}</p>
                  {/* Fixed sumPrice by calculating inline */}
                  <p style={itemPrice}>₹{item.price * item.qty}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={divider} />
          <div style={calc}><span>Subtotal</span><span>₹{subtotal}</span></div>
          <div style={calc}><span>Shipping</span><span>{shipping === 0 ? "Complimentary" : `₹${shipping}`}</span></div>
          <div style={totalLine}><span>Total</span><span>₹{total}</span></div>
        </aside>
      </div>
    </div>
  );
}

const bg = { background: "#fffafb", minHeight: "100vh", padding: "60px 20px" };
const wrapper = { display: "flex", gap: "40px", maxWidth: "1200px", margin: "0 auto", alignItems: "flex-start" };
const cardStyle = { background: "#fff", padding: "40px", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", flex: 1 };
const head = { fontFamily: "'Playfair Display', serif", fontSize: "18px", letterSpacing: "2px", marginBottom: "25px", borderBottom: "1px solid #eee", paddingBottom: "10px" };
const form = { display: "flex", flexDirection: "column", gap: "15px" };
const row = { display: "flex", gap: "15px" };
const inp = { padding: "15px", border: "1px solid #f0f0f0", background: "#fcfcfc", fontSize: "12px", width: "100%" };
const btn = { background: "#7a0f2b", color: "#fff", padding: "20px", border: "none", borderRadius: "30px", fontSize: "12px", letterSpacing: "2px", cursor: "pointer", fontWeight: "600" };
const itemList = { maxHeight: "350px", overflowY: "auto" };
const itemRow = { display: "flex", gap: "20px", marginBottom: "20px" };
const thumb = { width: "70px", height: "90px", objectFit: "cover", borderRadius: "8px" };
const details = { display: "flex", flexDirection: "column", justifyContent: "center" };
const itemName = { fontSize: "12px", fontWeight: "600" };
const itemQty = { fontSize: "11px", color: "#888" };
const itemPrice = { fontSize: "13px", fontWeight: "600", marginTop: "5px" };
const divider = { height: "1px", background: "#f0f0f0", margin: "20px 0" };
const calc = { display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#666", marginBottom: "10px" };
const totalLine = { display: "flex", justifyContent: "space-between", fontSize: "20px", fontWeight: "700", marginTop: "10px" };