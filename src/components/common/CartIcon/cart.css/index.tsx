import { useContext } from "react";
import "./cart.css";
import { CartContext } from "../../../../context";

export default function CartIcon() {
  const context = useContext(CartContext);
  if (context) {
    const { cart } = context;
    const totalQuantity = cart.reduce((acc, cake) => acc + cake.quantity, 0)
    console.log(cart)
    
    

    return (
      <div className="icon-container">
        <img src="src/assets/cart-icon-30.png" />
        <span className="cart-count">{totalQuantity}</span>
      </div>
    );
  }
}
