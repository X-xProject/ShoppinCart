import "./ProductDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { products } from "../data/products";
import { addToCart } from "../store/cartSlice";

function ProductDetail() {
  const { id } = useParams();

 

  const product = products.find(
    (p) => p.id === Number(id)
  );
  
    const [quantity, setQuantity] = useState(1);

     const dispatch = useDispatch();

      const navigate = useNavigate();

return (
  <div className="product-detail">
    <h1>{product.name}</h1>

    <p className="description">
      {product.description}
    </p>

    <p className="price">
      ${product.price}
    </p>

    <div className="quantity-box">
      <button
        onClick={() =>
          setQuantity(prev => Math.max(1, prev - 1))
        }
      >
        -
      </button>

      <span>{quantity}</span>

      <button
        onClick={() =>
          setQuantity(prev => prev + 1)
        }
      >
        +
      </button>
    </div>

    <button
      className="add-cart-btn"
      onClick={() => {
        dispatch(
          addToCart({
            ...product,
            quantity,
          })
        );

        navigate("/cart");
      }}
    >
      Add To Cart
    </button>
  </div>
);
}

export default ProductDetail;