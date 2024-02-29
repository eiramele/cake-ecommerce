import { useSearchParams } from "react-router-dom";
import "./searchbar.css";
import { useFilter } from "../../../context/FilterContext";

export default function SearchBar() {
  const { filter, handleSetFilter } = useFilter();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = (e) => {
    const newFilter = e.target.value;
    setSearchParams({ filter: newFilter });
    handleSetFilter(newFilter);
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
    </div>
  );
}
