import { useState } from "react";
import { Search } from "lucide-react";
import resList from "../utils/mockData";

function debounce(fn, t) {
  //debounce function
  let timeOutId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeOutId);

    timeOutId = setTimeout(() => {
      fn.apply(context, args);
    }, t);
  };
}

export default SearchBar = ({ setResults }) => {
  const [searchValue, setSearchValue] = useState("");

  const fetchData = (value) => {
    const results = resList.filter((restro) => {
      return (
        (value &&
          restro &&
          restro.info.name &&
          restro.info.name.toLocaleLowerCase().includes(value)) ||
        (value &&
          restro.info.cuisines &&
          restro.info.cuisines.some((cuisine) =>
            cuisine.toLocaleLowerCase().includes(value)
          ))
      );
    });
    setResults(results);
  };

  debounceFunction = debounce(fetchData, 300);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    debounceFunction(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for restaurants and food"
        value={searchValue}
        onChange={handleChange}
      />
      <Search className="search-button" />
    </div>
  );
};
