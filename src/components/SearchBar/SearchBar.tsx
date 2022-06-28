import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useState } from "react";

interface searchBarProps {
  setFetchUrl: (url: string) => void;
}

const SearchBar: React.FC<searchBarProps> = ({ setFetchUrl }) => {
  const [searchedTerm, setSearchedTerm] = useState<string>("");

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchedTerm(event.target.value);
    },
    []
  );

  const searchTerm = () => {
    const urlParam: string = searchedTerm.replaceAll(" ", "+");
    const searchUrl: string = `https://itunes.apple.com/search?term=${urlParam}&entity=song&limit=200`;
    setFetchUrl(searchUrl);
    setSearchedTerm("");
  };

  return (
    <div className="searchBar">
      <div className="input input--glass">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="input__icon" />
        <input
          type="text"
          className="input__field"
          placeholder="Find your favorite music"
          value={searchedTerm}
          onChange={handleOnChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") searchTerm();
          }}
        />
      </div>
      <button className="searchBar__button" onClick={searchTerm}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
