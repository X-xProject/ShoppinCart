import "./Cart.css";

import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  changeQuantity,
  clearCart,
} from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="cart-title">
        🛒 Shopping Cart
      </h1>

      {items.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty.
        </p>
      ) : (
        <>
          {items.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <div className="item-info">
                <h3>{item.name}</h3>

                <p className="item-price">
                  ${item.price}
                </p>
              </div>

              <div className="item-controls">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(
                      changeQuantity({
                        id: item.id,
                        quantity: Number(
                          e.target.value
                        ),
                      })
                    )
                  }
                />

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(
                      removeFromCart(
                        item.id
                      )
                    )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h2 className="cart-total">
              Total: ${total.toFixed(2)}
            </h2>

            <button
              className="clear-btn"
              onClick={() =>
                dispatch(clearCart())
              }
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;