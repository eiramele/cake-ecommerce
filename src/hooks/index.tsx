import { useEffect, useState } from "react";
import { getData } from "../services";
import { Cake } from "../pages/Home/Components";

/** Custom hooks are stored here. They are used to abstract logic from components and make it reusable.
 * The difference between hooks and utils is that hooks are used to abstract logic that is directly related to the application's business logic,
 * while utils are used to abstract logic that is not directly related to the application's business logic. */
export function useData(url) {
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
