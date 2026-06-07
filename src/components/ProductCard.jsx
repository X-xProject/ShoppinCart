import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="emoji">
        {product.emoji}
      </div>

      <h3>{product.name}</h3>

      <p className="price">
        ${product.price}
      </p>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;