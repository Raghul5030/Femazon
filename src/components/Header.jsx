import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header-container">
      <div className="main-container inner-header">
        <div className="logo-container">
          <span className="logo-text">Femazon</span>
          <span className="tagline-text">Luxury Beauty & Fashion</span>
        </div>

        <input
          type="text"
          placeholder="Search for makeup, skincare, brands..."
          className="search-input"
        />

        <nav className="nav-links">
          <NavLink to="/" className="nav-btn">
            Home
          </NavLink>
          <NavLink to="/products" className="nav-btn">
            Products
          </NavLink>
          <NavLink to="/wishlist" className="nav-btn">
            Wishlist
          </NavLink>
          <NavLink to="/tryon" className="nav-btn">
            AI Try-On
          </NavLink>
          <NavLink to="/cart">
            <button className="bag-btn-custom">Bag</button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

