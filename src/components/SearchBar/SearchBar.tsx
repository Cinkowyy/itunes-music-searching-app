import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="input input--glass">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="input__icon" />
        <input type="text" className="input__field" placeholder="Search" />
      </div>
      <button className="searchBar__button">Search</button>
    </div>
  );
};

export default SearchBar;
