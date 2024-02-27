import { Link } from "react-router-dom";
import Button from "../Button";
import "./loginbutton.css";
import { LOGIN } from "../../../routes/routing.routes";

export default function LogInButton() {
  
    
  return (
  <Link to={LOGIN}>
  <Button className="login-button">Log in</Button>
  </Link>);
}
