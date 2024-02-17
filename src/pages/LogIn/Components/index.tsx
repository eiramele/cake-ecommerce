import { Cake } from "../../Home/Components";

export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  cart: Cake[];
}

// const usersURL = "http://localhost:3000/users";
