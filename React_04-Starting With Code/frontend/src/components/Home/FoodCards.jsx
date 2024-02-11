import { useState } from "react";
import { Link } from "react-router-dom";

import useRestaurantsCards from "../../hooks/useRestaurantsCards";

import CardContainer from "./CardContainer";
import Footer from "../Footer/Footer";
import MainGridSlider from "../Home/MainGridSlider";
import SearchBar from "../Search/SearchBar";
import { SearchResultsList } from "../Search/SearchResultsList";
import Shimmer from "../Shimmers/Shimmer";
import TopRatedRes from "../TopPicks/TopRatedRes";

export default FoodCards = () => {
  //!Note: never take index's as a key, react says it.
  const { cards, menuCarousel } = useRestaurantsCards(); //Custom Hook to fetch restros.
  const [results, setResults] = useState([]);
  

  return (
    <>
      <main>
        <div className="welcome-state">
          {localStorage.getItem("firstName") || "Hello"}, what's on your mind?
        </div>
        <MainGridSlider slider={menuCarousel} />
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
        <TopRatedRes resList={cards}>
          <div id="card-container">
            {cards.length || 0 === 0 ? (
              <Shimmer />
            ) : (
              cards.map((restro) => (
                <Link
                  key={restro.info.id}
                  className="per-food-link"
                  to={"/restaurants/" + restro.info.id}
                >
                  <CardContainer foodData={restro} />
                </Link>
              ))
            )}
          </div>
        </TopRatedRes>
      </main>
      <Footer />
    </>
  );
};
