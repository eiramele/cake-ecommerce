import { useContext } from "react";
import "./cart.css";
import { CartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartIcon() {
  const context = useContext(CartContext);
  if (context) {
    const { cart } = context;
    const totalQuantity = cart.reduce((acc, cake) => acc + cake.quantity, 0);

    return (
      <Link to="/checkout">
        <div className="icon-container">
          <img src="/src/assets/cart-icon-30.png" />
          {totalQuantity !== 0 && (
            <span className="cart-count">{totalQuantity}</span>
          )}
        </div>
      </Link>
    );
  }
}
