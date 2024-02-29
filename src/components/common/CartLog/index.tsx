import { CartIcon, LogInButton, LogoutButton } from "..";
import { useAuth } from "../../../context/AuthContext";


export default function CartLog() {
    const { isAuthenticated } = useAuth();
    return (
      <div className="container">
        <CartIcon />
        {!isAuthenticated ? <LogInButton /> : <LogoutButton />}
      </div>
    );
  }