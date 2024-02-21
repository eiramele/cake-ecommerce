import { CakeCardTotal } from "../../pages/Checkout/Components";
import { CakeObjList } from "../../pages/Home/Components";
import Main from "../Main";
import CartIcon from "../common/CartIcon/cart.css";
import Header from "../common/Header";
import SearchBar from "../common/SearchBar";


const cakesURL: string = "http://localhost:3000/cakes";

export function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <SearchandAddToCart />
        <CakeObjList url={cakesURL} />
      </Main>
    </>
  );
}

export function CheckoutPage() {
  return (
    <>
      <Header />
      <Main>
        <CakeCardTotal />
      </Main>
    </>
  );
}

export function SearchandAddToCart() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <SearchBar />
      <CartIcon />
    </div>
  );
}
