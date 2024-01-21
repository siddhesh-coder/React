import React, { useState } from "react";
import { Search } from "lucide-react";
import { SWIGGY_API } from "../utils/constants";

const debounce = (fn, t) => {
  let timeOutId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeOutId);

    timeOutId = setTimeout(() => {
      fn.apply(context, args);
    }, t);
  };
};

const SearchBar = ({ setResults }) => {
  const [searchValue, setSearchValue] = useState("");

  const fetchData = async (value) => {
    try {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      const cards =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      const results = cards.filter((restro) => {
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const debounceFunction = debounce(fetchData, 300);

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

export default SearchBar;
