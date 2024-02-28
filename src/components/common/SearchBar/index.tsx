import { useSearchParams } from "react-router-dom";


import Button from "../Button";
import "./searchbar.css";
import { useFilter } from "../../../context/FilterContext";

export default function SearchBar() {
  const { filter, handleSetFilter } = useFilter();
  const [searchParams, setSearchParams] = useSearchParams();
 
  
  const handleFilter = (e) => {
    const newFilter = e.target.value;
    setSearchParams({ filter: newFilter }); // Actualitza la URL
    handleSetFilter(newFilter); // Opcional, si vols actualitzar l'estat global a més de la URL
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder=" Search here!"
        value={filter}
        onChange={handleFilter}
      ></input>
      <Button className="search-button">
        <img src="/src/assets/search-icon.png" />
      </Button>
    </div>
  );
}
