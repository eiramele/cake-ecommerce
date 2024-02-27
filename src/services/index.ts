/** Services are used to make API calls and handle the response. */

import { Cake } from "../pages/Home/Components";
import { User } from "../pages/LogIn/Components";

// import { User } from "../pages/LogIn/Components";

// export async function getCakes() {
//   try {
//     const response = await fetch("http://localhost:3000/cakes");
//     const data = await response.json();

//     return data;
//   } catch (error) {
//     console.error("Error loading content", error);
//     return null;
//   }
// }

// export async function getUsers(url: string) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     return data;
//   } catch (error) {
//     console.error("Error loading content", error);
//     return null;
//   }
// }

export async function getData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.log(error)
    return null;
  }
}
