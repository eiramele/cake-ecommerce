import { useContext, useEffect, useState } from "react";
import { CartContext, useCartContext } from "../../../context";
import { CakeWithQuantity } from "../../Home/Components";
import "./checkout.css";
import { formatNumber } from "../../../utils";
import Button from "../../../components/common/Button";

export function CakeCardTotal() {
  const context = useCartContext();
  const [value, setValue] = useState("0");

  if (context) {
    const { cart } = context;

    if (cart.length === 0) {
      return <div>Your cart is empty</div>;
    } else {
      return (
        <div className="checkout__container">
          <p>Your cart:</p>
          {cart.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}

          <div className="shipment-toggle">
            <span>Pick up in store</span>
            <ToggleButton value={value} setValue={setValue} />
            <span>{`Home delivery (+3 €)`}</span>
          </div>
          <Payment value={value} />
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
          {` - `}
        </Button>
        <span> {cake.quantity} </span>
        <Button className="change-quantity-button" onClick={increaseQuantity}>
          {` + `}
        </Button>
        {`${cake.name} * ${cake.price} € = ${formatNumber(total)} €`}
        <DeleteCake cake={cake} />
      </div>
    </div>
  );
}

export function ToggleButton({ value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label className="">
        <input
          className="toggle-range"
          type="range"
          min="0"
          max="1"
          value={value}
          onChange={handleChange}
        ></input>
      </label>
    </div>
  );
}

function Payment({ value }) {
  const context = useCartContext();
  const { cart, setCart } = context;

  const subtotal = formatNumber(
    cart.reduce((acc, cake) => acc + cake.price * cake.quantity, 0)
  );
  const shipment = value === "0" ? 0 : 3;

  const total = Number(subtotal) + shipment;

  function handlePayment() {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }
  return (
    <div className="payment-container">
      <p> Subtotal: {`${subtotal} €`}</p>
      <p>Shipment: {value === "1" ? `3 €` : `Free`}</p>
      <p className="total-price">Total: {total.toFixed(2)} €</p>
      <Button className="payment-button" onClick={handlePayment}>
        Pay now
      </Button>
    </div>
  );
}

function DeleteCake({ cake }) {
  const context = useCartContext();
  const { cart, setCart } = context;
  // const [isMounted, setIsMounted] = useState(false); // Afegit per a controlar la muntatge

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([...cart]));
  }, [cart]);

  function handleDelete() {
    setCart((currentCart) => currentCart.filter((item) => item.id !== cake.id));
    if (cart.length === 1) localStorage.removeItem("cart");
  }

  return (
    <Button className="trash-icon" onClick={handleDelete}>
      <img src="src/assets/trash-icon-24.png" />
    </Button>
  );
}
