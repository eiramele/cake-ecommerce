import { useEffect, useState } from "react";
// import { getCakes, getData } from "../../../services";
import "./home.css";
import "/src/App.css";
import Button from "../../../components/common/Button";

import { CartContextType, useCartContext } from "../../../context";
import { useData, useLocalStorageCart } from "../../../hooks";
import { Link } from "react-router-dom";

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
  
  const {id, price, image, name} = cake
  return (
    <div className="cake-li">
      <Link className="cake-link" to={`${id}`}>
        <div className="image-container">
          <img src={image} className="cake-image" />
        </div>
        <h4>{price} €</h4>
        <h4>{name}</h4></Link>
        <SelectQuantity cake={cake} />
      
    </div>
  );
}

export const CakeObjList: React.FC<CakeListProps> = ({ url }) => {
  //const [cakes, setCakes] = useState<Cake[] | null>([]);
  const { cart } = useCartContext();
  const { cakes } = useData(url);

  useLocalStorageCart(cart);

  // useEffect(
  //   function () {
  //     async function fetchCakes() {
  //       try {
  //         const data = await getData(url);
  //         // const data = await response.json();

  //         setCakes(data);
  //       } catch (error) {
  //         console.error("Error loading content", error);
  //         return null;
  //       }
  //     }
  //     fetchCakes(); //posar-hi el controller? Jonas vídeo 156. O potser no cal posar-hi res, comprovar què fa elq uehi ha ara
  //   },
  //   [url]
  // );

  // useEffect(
  //   function () {
  //     localStorage.setItem("cart", JSON.stringify([...cart]));
  //   },
  //   [cart]
  // );

  // useEffect(
  //   function () {
  //     if (cart.length > 0) {
  //       localStorage.setItem("cart", JSON.stringify([...cart]));
  //     } else {
  //       localStorage.removeItem("cart");
  //     }
  //     return () => {
  //       if (cart.length === 0) localStorage.setItem("cart", JSON.stringify([]));
  //     };
  //   },
  //   [cart]
  // );

  return (
    <ul>
      {cakes?.map((cake) => (
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

// const addToCart = () => {
//   if (contextCart) {
//     const { cart, setCart } = contextCart;

//     const cakeWithQuantity: CakeWithQuantity = { ...cake, quantity };
//     const existingCakeIndex = cart.findIndex(
//       (item) => item.id === cakeWithQuantity.id
//     );

//     if (existingCakeIndex >= 0) {
//       const updatedCart = [...cart];
//       updatedCart[existingCakeIndex].quantity += cakeWithQuantity.quantity;

//       setCart(updatedCart);
//     } else {
//       setCart([...cart, cakeWithQuantity]);
//     }
//   }
// };
