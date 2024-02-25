import { Link } from "react-router-dom";

import useRestaurantsCards from "../../hooks/useRestaurantsCards";

import Footer from "../Footer/Footer";
import MainGridSlider from "../Home/MainGridSlider";
import SearchBar from "../Search/SearchBar";
import Restros from "./Restros";

export default FoodCards = () => {
  const { cards, menuCarousel } = useRestaurantsCards();

  // console.log(cards.info.id);

  return (
    <>
      <main>
        <div className="font-extrabold text-xl text-blue-gray-900 mb-5">
          {localStorage.getItem("firstName") || "Hello"}, what's on your mind?
        </div>
        <MainGridSlider slider={menuCarousel} />
        <SearchBar />
        <Restros resList={cards}/>
      </main>
      {/* <Footer /> */}
    </>
  );
};
