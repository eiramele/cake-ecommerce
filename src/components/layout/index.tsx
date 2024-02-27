import { CakeCardTotal } from "../../pages/Checkout/Components";
import { CakeObjList } from "../../pages/Home/Components";
import LogIn from "../../pages/LogIn/Components";
import { ProductPage } from "../../pages/ProductPage/Components";
import ThankYou from "../../pages/ThankYouPage";
import Main from "../Main";
import CartIcon from "../common/CartIcon/cart.css";
import Header from "../common/Header";
import SearchBar from "../common/SearchBar";

const cakesURL: string = "http://localhost:3000/cakes";

export function LoginPage() {
  return (
    <>
      <Main>
        <Header />
        <LogIn />
      </Main>
    </>
  );
}

export function HomePage() {
  return (
    <>
      <Main>
        <Header />
        <SearchandAddToCart />
        <CakeObjList url={cakesURL} />
      </Main>
    </>
  );
}

export function CheckoutPage() {
  return (
    <>
      <Main>
        <Header />

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

export function ProductPageLayout() {
  return (
    <>
      <Main>
        <Header />
        <SearchandAddToCart />
        <ProductPage url={cakesURL} />
      </Main>
    </>
  );
}

export function ThankYouPage() {
  return (
    <>
      <Main>
        <Header />
        <ThankYou />
      </Main>
    </>
  );
}
