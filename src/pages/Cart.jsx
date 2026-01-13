import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = subtotal > 1000 ? 0 : 99;
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="cart-page-empty">
        <div className="empty-content">
          <span className="empty-icon">👜</span>
          <h2>Your Bag is Empty</h2>
          <p>Seems like you haven't added anything yet.</p>
          <Link to="/products" className="shop-now-btn">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-layout">
        {/* Left: Cart Items */}
        <div className="cart-main">
          <header className="cart-header">
            <h1>My Bag</h1>
            <span className="item-count">({cart.length} items)</span>
          </header>

          <div className="cart-items-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-card">
                <div className="card-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="card-info">
                  <div className="card-top">
                    <h3 className="item-name">{item.name}</h3>
                    <button
                      className="delete-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </div>

                  <p className="item-brand">{item.brand || "Femazon Luxury"}</p>
                  <p className="item-category">{item.category}</p>

                  <div className="card-bottom">
                    <div className="qty-picker">
                      <button onClick={() => updateQty(item.id, -1)} aria-label="Decrease quantity">−</button>
                      <span className="qty-val">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} aria-label="Increase quantity">+</button>
                    </div>
                    <div className="item-price-block">
                      <span className="single-price">₹{item.price}</span>
                      <span className="total-price">₹{item.price * item.qty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Summary Sidebar */}
        <aside className="cart-sidebar">
          <div className="summary-card">
            <h3>Order Summary</h3>

            <div className="summary-rows">
              <div className="summary-line">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="summary-line">
                <span>Delivery</span>
                <span className={deliveryFee === 0 ? "free" : ""}>
                  {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                </span>
              </div>
              {deliveryFee > 0 && (
                <p className="delivery-note">Free delivery on orders above ₹1000</p>
              )}
            </div>

            <div className="summary-total">
              <div className="total-line">
                <span>Total Amount</span>
                <span>₹{total}</span>
              </div>
            </div>

            <Link to="/checkout" className="checkout-main-btn">
              Proceed to Checkout
            </Link>

            <div className="trust-badges">
              <span>🔒 Secure Payment</span>
              <span>✨ Genuine Products</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
