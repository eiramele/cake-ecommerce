import { CakeCartTotal } from "../../pages/Checkout/Components";
import { CakeObjList } from "../../pages/Home/Components";
import LogIn from "../../pages/LogIn/Components";
import Payment from "../../pages/PaymentDetails";
import { ProductPage } from "../../pages/ProductPage/Components";
import ThankYou from "../../pages/ThankYouPage";
import Main from "../Main";
import Header from "../common/Header";
import SearchCartLog from "../common/SearchCartLog";

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
        <SearchCartLog />
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
        <SearchCartLog />
        <CakeCartTotal />
      </Main>
    </>
  );
}

export function ProductPageLayout() {
  return (
    <>
      <Main>
        <Header />
        <SearchCartLog />
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

export function PaymentPage() {
  return (
    <>
      <Main>
        <Header />
        <Payment />
      </Main>
    </>
  );
}
