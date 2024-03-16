import React, { useState } from "react";
import { Search } from "lucide-react";
import { SWIGGY_API } from "../../utils/constants";
import { SearchResultsList } from "./SearchResultsList";

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

const SearchBar = () => {
  const [results, setResults] = useState([]);
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
          (value && restro?.info?.name.toLocaleLowerCase().includes(value)) ||
          (value &&
            restro?.info?.cuisines.some((cuisine) =>
              cuisine.toLocaleLowerCase().includes(value)
            ))
        );
      });
      setResults(results);
    } catch (error) {
      const notifyError = () =>
        toast.error("Error fetching data", {
          style: {
            backgroundColor: "rgb(0,0,0,90)",
            color: "white",
            fontWeight: "600",
          },
        });
      notifyError();
      console.error("Error fetching data:", error);
    }
  };

  const debounceFunction = debounce(fetchData, 300);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    debounceFunction(e.target.value);
  };

  return (
    <>
      <div className="relative w-1/2 h-[50px] flex justify-between items-center border-none pr-[15px] border bg-[#eeeeee]">
        <input
          data-testid="search-test"
          type="text"
          className="w-[95%] h-full border-none ps-5 text-base bg-[#eeeeee] outline-none"
          placeholder="Search for restaurants and food"
          value={searchValue}
          onChange={handleChange}
        />
        <Search
          data-testid="search-icon"
          className="absolute right-0 bg-transparent border-none m-[15px]"
        />
        <SearchResultsList results={results} />
      </div>
    </>
  );
};

export default SearchBar;
