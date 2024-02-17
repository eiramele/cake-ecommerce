/** Services are used to make API calls and handle the response. */

import { Cake } from "../pages/Home/Components";
import { User } from "../pages/LogIn/Components";

export async function getCakes(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const cakesData: Cake[] = data.results;
    return cakesData;
  } catch (error) {
    console.error("Error loading content", error);
    return null;
  }
}

export async function getUsers(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const usersData: User[] = data.results;
    return usersData;
  } catch (error) {
    console.error("Error loading content", error);
    return null;
  }
}

export async function getData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results
    return results;
  } catch (error) {
    console.error("Error loading content", error);
    return null;
  }
}
