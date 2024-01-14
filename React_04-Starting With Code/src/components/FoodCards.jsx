import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import TopRatedRes from "./TopRatedRes";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { SearchResultsList } from "./SearchResultsList";
import { SWIGGY_API } from "../utils/constants";

export default FoodCards = () => {
  //!Note: never take index's as a key react says it.

  const [results, setResults] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      setCards(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main>
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results} />
      <TopRatedRes resList={cards}>
      <div id="card-container">
        
        {/* conditional rendering */}
        {cards.length === 0 ? (
          <Shimmer />
        ) : (
          cards.map((restro) => (
            <CardContainer key={restro.info.id} foodData={restro} />
          ))
        )}
      </div>
      </TopRatedRes>
    </main>
  );
};
