import CartIcon from "../common/CartIcon/cart.css";
import SearchBar from "../common/SearchBar";

export default function SearchandAddToCart(){
    return(
        <div style={{ display: 'flex', gap:"1rem" }} >
        <SearchBar/>
        <CartIcon/></div>
    )
}