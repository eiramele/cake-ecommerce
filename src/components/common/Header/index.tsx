/** At the top we will have all required imports */
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <Link to="/home">
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
