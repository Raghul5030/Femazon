import { useCart } from "../context/CartContext";

export default function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div style={toastStyle}>
      <span style={iconStyle}>✓</span>
      {toast}
    </div>
  );
}

/* LUXURY TOAST STYLES */
const toastStyle = {
  position: "fixed",
  top: "100px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#1a5f2b",
  color: "#fff",
  padding: "16px 32px",
  borderRadius: "12px",
  zIndex: 10000,
  fontSize: "15px",
  fontWeight: "500",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  animation: "slideDown 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
  letterSpacing: "0.3px",
};

const iconStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
  background: "rgba(255, 255, 255, 0.25)",
  borderRadius: "50%",
  fontSize: "14px",
  fontWeight: "bold",
};
