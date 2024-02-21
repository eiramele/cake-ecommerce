import { useContext } from "react";
import { CartContext } from "../../../context";
import { CakeWithQuantity, addToCart } from "../../Home/Components";
import "./checkout.css";
import { formatNumber } from "../../../utils";
import Button from "../../../components/common/Button";

export function CakeCardTotal() {
  const context = useContext(CartContext);

  if (context) {
    const { cart } = context;
    console.log(cart);

    if (cart.length === 0) {
      return <div>Your cart is empty</div>;
    } else {
      //const finalPrice = cart.reduce((acc, cake) => acc + cake.total, 0);
      return (
        <div>
          <p>Your cart:</p>
          {cart.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
          Subtotal:{" "}
          {formatNumber(
            cart.reduce((acc, cake) => acc + cake.price * cake.quantity, 0)
          )}
        </div>
      );
    }
  }
}

function CakeCard({ cake }: { cake: CakeWithQuantity }) {
  const total = cake.price * cake.quantity;
  const context = useContext(CartContext);
  const { setCart } = context;

  function decreaseQuantity() {
    setCart((currentCart) => {
      return currentCart.map((item) => {
        if (item.id === cake.id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  }

  function increaseQuantity() {
    setCart((currentCart) => {
      return currentCart.map((item) => {
        if (item.id === cake.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  }

  return (
    <div className="product-info__container">
      <img className="cake-image--mini" src={cake.image} alt={cake.name} />

      <div className="quantity-price-info">
        <Button className="change-quantity-button" onClick={decreaseQuantity}>
          {" "}
          -{" "}
        </Button>
        <span> {cake.quantity} </span>
        <Button className="change-quantity-button" onClick={increaseQuantity}>
          {" "}
          +{" "}
        </Button>
        {cake.name} *
        <span>
          {cake.price} = {formatNumber(total)}
        </span>
      </div>
    </div>
  );
}

// function Quantity({cake}:CakeWithQuantity) {
//     const context = useContext(CartContext);

//     if (context) {
//       const { cart, setCart } = context;
//   function handleSubstract() {
//     if ( cart.quantity> 0) setQuantity((q) => q - 1);
//   }

//   function handleAdd() {
//     setQuantity((q) => q + 1);
//   }

//   return (
//     <div>
//       <Button onClick={handleSubstract} >{<span>-</span>}</Button>
//       <span>Quantity: {cake.quantity}</span>
//       <AddButton onClick={handleAdd} />
//     </div>
//   );
// }}
