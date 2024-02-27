/** At the top we will have all required imports */
import { Link } from "react-router-dom";
import "./header.css";
import { HOME } from "../../../routes/routing.routes";

const Header = () => {
  return (
    <Link to={HOME}>
      <div className="header">
        <Logo />
        <div className="title">Bcn Cakes</div>
      </div>
    </Link>
  );
};

const Logo = () => {
  return <img src="/src/assets/cakeApp_logo.webp" className="logo-image" />;
};

export default Header;
