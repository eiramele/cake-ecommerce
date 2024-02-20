import { useContext, useEffect, useState } from "react";
// import { getCakes, getData } from "../../../services";
import "./home.css";
import "/src/App.css";
import Button from "../../../components/common/Button";
import { getData } from "../../../services";
import { CartContext } from "../../../context";

export interface Cake {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  rating: string;
}

export interface CakeWithQuantity extends Cake {
  quantity: number;
}

interface CakeListProps {
  url: string;
}

function CakeObj({ cake }: { cake: Cake }) {
  return (
    <li className="cake-li">
      <div className="image-container">
        <img src={cake.image} className="cake-image" />
      </div>
      <h4>{cake.price} €</h4>
      <h4>{cake.name}</h4>
      <SelectQuantity cake={cake} />
    </li>
  );
}

export const CakeObjList: React.FC<CakeListProps> = ({ url }) => {
  const [cakes, setCakes] = useState<Cake[] | null>([]);

  useEffect(
    function () {
      async function fetchCakes() {
        try {
          const data = await getData(url);
          // const data = await response.json();

          setCakes(data);
        } catch (error) {
          console.error("Error loading content", error);
          return null;
        }
      }
      fetchCakes();
    },
    [url]
  );

  return (
    <ul>
      {cakes?.map((cake) => (
        <CakeObj cake={cake} key={cake.id} />
      ))}
    </ul>
  );
};


function SelectQuantity( {cake}: { cake: Cake } ) {
  const [quantity, setQuantity] = useState<number>(1);

  const context = useContext(CartContext);
  const addToCart = () => {
    if (context) {
      const { cart, setCart } = context;

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

  return (
    <div className="quantity-container">
      <select
        className="select-quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <Button className="add-to-cart--button" onClick={addToCart}>
        Add
      </Button>
    </div>
  );
}

// function AddToCartButton() {
//   return ;
// }
