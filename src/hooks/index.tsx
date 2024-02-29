import { useEffect, useState } from "react";
import { getData } from "../services";
import { Cake } from "../context/CakesContext";
import { CakeWithQuantity } from "../context/CartContext";

export function useData(url: string) {
  const [cakes, setCakes] = useState<Cake[] | null>([]);

  useEffect(
    function () {
      async function fetchCakes() {
        try {
          const data: Cake[] | null = await getData(url);

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
  return { cakes, setCakes };
}

export function useLocalStorageCart(cart: CakeWithQuantity[]) {
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify([...cart]));
    } else {
      localStorage.removeItem("cart");
    }

    // Cleanup function
    return () => {
      if (cart.length === 0) localStorage.setItem("cart", JSON.stringify([]));
    };
  }, [cart]);
}
