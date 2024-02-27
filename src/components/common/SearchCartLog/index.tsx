import { useAuth } from "../../../context/AuthContext";
import CartIcon from "../CartIcon/cart.css";
import LogInButton from "../LogInButton";
import Logout from "../LogoutButton";
import SearchBar from "../SearchBar";
import "./searchcartlog.css";

export default function SearchCartLog() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container">
      <SearchBar />
      <CartIcon />
      {!isAuthenticated ? <LogInButton /> : <Logout />}
    </div>
  );
}
