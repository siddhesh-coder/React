import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import TopRatedRes from "./TopRatedRes";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { SearchResultsList } from "./SearchResultsList";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";

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
      <div className="welcome-state">{localStorage.getItem('firstName') || ""}, what's on your mind?</div>
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results} />
      <TopRatedRes resList={cards}>
      <div id="card-container">
        {cards.length === 0 ? (
          <Shimmer />
        ) : (
          cards.map((restro) => (
            <Link key={restro.info.id} className="per-food-link" to={"/restaurants/" + restro.info.id}>
              <CardContainer foodData={restro} />
            </Link>
          ))
        )}
      </div>
      </TopRatedRes>
    </main>
  );
};
