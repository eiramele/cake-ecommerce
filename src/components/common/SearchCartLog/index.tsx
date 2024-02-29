import { LogoutButton, CartIcon, LogInButton, SearchBar } from "..";
import { useAuth } from "../../../context/AuthContext";

import "./searchcartlog.css";

function SearchCartLog() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container">
      <SearchBar />
      <CartIcon />
      {!isAuthenticated ? <LogInButton /> : <LogoutButton />}
    </div>
  );
}



export default SearchCartLog ;
