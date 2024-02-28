import useRestaurantsCards from "../../hooks/useRestaurantsCards";

import Footer from "../Footer/Footer";
import MainGridSlider from "../Home/MainGridSlider";
import SearchBar from "../Search/SearchBar";
import Restros from "./Restros";
import RestrosCarousel from "./RestrosCarousel";

export default FoodCards = () => {
  const { cards, menuCarousel, restrosCarousel } = useRestaurantsCards();

  return (
    <>
      <main>
        <div className="font-extrabold text-xl text-blue-gray-900 mb-5">
          {localStorage.getItem("firstName") || "Hello"}, what's on your mind?
        </div>
        <MainGridSlider slider={menuCarousel} />
        <RestrosCarousel list={restrosCarousel}/>
        <SearchBar />
        <Restros resList={cards}/>
      </main>
      {/* <Footer /> */}
    </>
  );
};
