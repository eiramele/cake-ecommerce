import { useState } from "react";
import "./home.css";
import "/src/App.css";
import { Button } from "../../../components/common";

import {
  CakeWithQuantity,
  CartContextType,
  useCartContext,
} from "../../../context/CartContext";
import { useLocalStorageCart } from "../../../hooks";
import { Link } from "react-router-dom";
import { Cake, useCakes } from "../../../context/CakesContext";
import { useFilter } from "../../../context/FilterContext";

interface CakeListProps {
  url: string;
}

function CakeObj({ cake }: { cake: Cake }) {
  const { id, price, image, name } = cake;
  return (
    <div className="cake-li">
      <Link className="cake-link" to={`${id}`}>
        <div className="image-container">
          <img src={image} className="cake-image" />
        </div>
        <h4>{price} €</h4>
        <h4>{name}</h4>
      </Link>
      <SelectQuantity cake={cake} />
    </div>
  );
}

export const CakeObjList: React.FC<CakeListProps> = () => {
  const { filter } = useFilter();
  const { cart } = useCartContext();
  const { cakes } = useCakes();

  useLocalStorageCart(cart);

  return (
    <ul>
      {cakes
        .filter((cake) => {
          if (!filter) return true;
          const name = cake.name.toLowerCase();
          return name.includes(filter.toLowerCase());
        })
        .map((cake) => (
          <CakeObj cake={cake} key={cake.id} />
        ))}
    </ul>
  );
};

export function SelectQuantity({ cake }: { cake: Cake }) {
  const [quantity, setQuantity] = useState<number>(1);

  const contextCart = useCartContext();

  return (
    <li className="quantity-container">
      <select
        className="select-quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: cake.stock }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <Button
        className="add-to-cart--button"
        onClick={() => addToCart(contextCart, cake, quantity)}
      >
        Add
      </Button>
    </li>
  );
}

export const addToCart = (
  contextCart: CartContextType,
  cake: Cake,
  quantity: number
) => {
  if (contextCart) {
    const { cart, setCart } = contextCart;

    const cakeWithQuantity: CakeWithQuantity = { ...cake, quantity };
    const existingCakeIndex = cart.findIndex(
      (item) => item.id === cakeWithQuantity.id
    );

    if (existingCakeIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingCakeIndex].quantity += cakeWithQuantity.quantity;

      setCart(updatedCart);
    } else {
      setCart([...cart, cakeWithQuantity]);
    }
  }
};
