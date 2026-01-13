export default function Filters({ products = [], setFiltered }) {
  const categories = [...new Set(products.map(p => p?.category).filter(Boolean))];

  const handleCategory = (cat) => {
    setFiltered(products.filter(p => p.category === cat));
  };

  return (
    <div className="filters">
      <h4>Categories</h4>
      {categories.map((cat) => (
        <button key={cat} onClick={() => handleCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}
