/** At the top we will have all required imports */
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="title">Bcn Cakes</div>
    </div>
  );
};

const Logo = () => {
  return <img src="src/assets/cakeApp_logo.webp" className="logo-image"/>;
};

export default Header;
