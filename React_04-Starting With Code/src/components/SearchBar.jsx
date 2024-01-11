import { Search } from "lucide-react";

export default SearchBar = () => {
    return (
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants and food "
        />
        <button className="search-button">
          <Search />
        </button>
      </div>
    );
  };
  