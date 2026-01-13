import { useNavigate } from "react-router-dom";

function CategoryCard({ title }) {
  const navigate = useNavigate();

  return (
  <div
    className="category-card category-hover"
    onClick={() => navigate(`/products/${title.toLowerCase()}`)}
  >
    <h3>{title}</h3>
  </div>
);

}

export default CategoryCard;
