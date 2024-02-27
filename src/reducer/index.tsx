// import { useContext, useReducer } from "react";
// import { CartContext } from "../context";

import { CakeWithQuantity } from "../pages/Home/Components";

// const { state, dispatch } = useContext(CartContext);

// const initialState = { state };

// export function reducer(state, action) {

// }

enum cartActionTypes {
  add_item = "add_item",
  remove_item = "remove_item",
  increment_quantity = "increment_quantity",
  decrement_quantity = "decrement_quantity",
  clear_cart = "clear_cart",
}

export function cartReducer(state:CakeWithQuantity[], action) {
  switch (action.type) {
    case cartActionTypes.add_item: {
      const { cake, quantity } = action.payload;
      const existingIndex = state.findIndex((item) => item.id === cake.id);

      if (existingIndex >= 0) {
        const updatedCart = [...state];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...state, { ...cake, quantity }];
      }
    }

    // case cartActionTypes.remove_item:
    //   state + 1;
    //   break;
    // case cartActionTypes.increment_quantity:
    //   state + 1;
    //   break;
    // case cartActionTypes.decrement_quantity:
    //   state + 1;
    //   break;
    // case cartActionTypes.clear_cart:
    //   state + 1;
    //   break;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
