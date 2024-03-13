import useRestaurantsCards from "../../hooks/useRestaurantsCards";
import MainGridSlider from "../Home/MainGridSlider";
import SearchBar from "../Search/SearchBar";
import Restros from "./Restros";
import RestrosCarousel from "./RestrosCarousel";
import Greeting from "./Greeting";

const FoodCards = () => {
  const { cards, menuCarousel, restrosCarousel } = useRestaurantsCards();

  return (
    <>
      <main className="flex flex-col justify-center items-center ml-[10px] p-5 mt-[100px]">
        <Greeting/>
        <MainGridSlider slider={menuCarousel} />
        <RestrosCarousel list={restrosCarousel} />
        <SearchBar />
        <Restros resList={cards} />
      </main>
    </>
  );
};

export default FoodCards;
