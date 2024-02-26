import { useEffect, useState } from "react";
import { getData } from "../services";
import { Cake } from "../pages/Home/Components";

export function useData(url: string) {
  const [cakes, setCakes] = useState<Cake[] | null>([]);

  useEffect(
    function () {
      async function fetchCakes() {
        try {
          const data = await getData(url);

          setCakes(data);
        } catch (error) {
          console.error("Error loading content", error);
          return null;
        }
      }
      fetchCakes(); //posar-hi el controller? Jonas vídeo 156. O potser no cal posar-hi res, comprovar què fa elq uehi ha ara
    },
    [url]
  );
  return { cakes, setCakes };
}


export function useLocalStorageCart(cart) {
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify([...cart]));
    } else {
      localStorage.removeItem('cart');
    }

    // Cleanup function
    return () => {
      if (cart.length === 0) localStorage.setItem('cart', JSON.stringify([]));
    };
  }, [cart]);
}