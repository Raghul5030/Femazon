import { Link } from "react-router-dom";
import "./SearchDropdown.css";

export default function SearchDropdown({ results, onClose }) {
  if (!results.length) return null;

  return (
    <div className="search-dropdown">
      {results.map(product => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="search-item"
          onClick={onClose}
        >
          <img src={product.image} alt={product.name} />
          <div>
            <p className="name">{product.name}</p>
            <p className="price">₹{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
