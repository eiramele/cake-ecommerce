import { useAuth } from "../../../context/AuthContext";
import CartIcon from "../CartIcon/cart.css";
import LogInButton from "../LogInButton";
import Logout from "../LogoutButton";
import SearchBar from "../SearchBar";
import "./searchcartlog.css";

function SearchCartLog() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container">
      <SearchBar />
      <CartIcon />
      {!isAuthenticated ? <LogInButton /> : <Logout />}
    </div>
  );
}

function CartLog() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="container">
      <CartIcon />
      {!isAuthenticated ? <LogInButton /> : <Logout />}
    </div>
  );
}

export { SearchCartLog, CartLog };
