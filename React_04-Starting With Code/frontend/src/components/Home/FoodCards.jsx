import { useEffect, useState } from "react";
import useRestaurantsCards from "../../hooks/useRestaurantsCards";
import MainGridSlider from "../Home/MainGridSlider";
import SearchBar from "../Search/SearchBar";
import Restros from "./Restros";
import RestrosCarousel from "./RestrosCarousel";
import { useSelector } from "react-redux";

const FoodCards = () => {
  const [userName, setUserName] = useState("");
  const { cards, menuCarousel, restrosCarousel } = useRestaurantsCards();
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUserName(JSON.parse(userInfo)?.name);
  }, [userName]);

  return (
    <>
      <main>
        <div className="mb-5 text-xl font-extrabold text-blue-gray-900">
          {isAuthenticated ? userName : "Hello"}, what's on your mind?
        </div>
        <MainGridSlider slider={menuCarousel} />
        <RestrosCarousel list={restrosCarousel} />
        <SearchBar />
        <Restros resList={cards} />
      </main>
    </>
  );
};

export default FoodCards;
