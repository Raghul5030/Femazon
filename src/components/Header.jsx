import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyles}>
      <div className="main-container" style={innerHeaderStyles}>
        <div style={logo}>
          Femazon
          <span style={tagline}>Luxury Beauty & Fashion</span>
        </div>

        <input
          type="text"
          placeholder="Search for makeup, skincare, brands..."
          style={search}
        />

        <nav style={nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/wishlist">Wishlist</NavLink>
          <NavLink to="/tryon">AI Try-On</NavLink>
          <NavLink to="/cart">
            <button>Bag</button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

/* STYLES */
const headerStyles = {
  background: "white",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  position: "sticky",
  top: 0,
  zIndex: 100,
};

const innerHeaderStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: 16,
  paddingBottom: 16,
};

const logo = {
  fontSize: 26,
  fontWeight: 700,
  color: "#7b1e3c",
};

const tagline = {
  display: "block",
  fontSize: 12,
  fontWeight: 400,
  color: "#777",
};

const search = {
  width: "35%",
  padding: "10px 16px",
  borderRadius: 999,
  border: "1px solid #ddd",
  outline: "none",
};

const nav = {
  display: "flex",
  alignItems: "center",
  gap: 20,
};
