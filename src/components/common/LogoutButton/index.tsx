import { useAuth } from "../../../context/AuthContext";
import Button from "../Button";
import "./logoutbutton.css";

export default function Logout() {
  const { user, logout } = useAuth();

  function handleClick() {
    logout();
  }

  return (
    <div className="logout__container">
      <span className="name-letter">{user?.name[0].toUpperCase()}</span>
      <Button className="logout-button" onClick={handleClick}>
        <img src="/src/assets/logout-icon-24.png" className="logout-image" />
      </Button>
    </div>
  );
}
