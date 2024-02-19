import Button from "../Button";
import "./searchbar.css";

export default function SearchBar() {
  return (
    <div className="search-box">
    <input
      type="text"
      className="search-input"
      placeholder=" Search here!"
    ></input>
    <Button className="search-button"><img src="src/assets/search-icon.png"/></Button></div>
    
  );
}
