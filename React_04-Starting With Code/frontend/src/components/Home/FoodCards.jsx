import { useEffect, useState } from "react";
import useRestaurantsCards from "../../hooks/useRestaurantsCards";

import Footer from "../Footer/Footer";
import MainGridSlider from "../Home/MainGridSlider";
import SearchBar from "../Search/SearchBar";
import Restros from "./Restros";
import RestrosCarousel from "./RestrosCarousel";

export default FoodCards = () => {
  const [userName, setUserName] = useState("");
  const { cards, menuCarousel, restrosCarousel } = useRestaurantsCards();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUserName(JSON.parse(userInfo).name);
  }, [userName]);

  return (
    <>
      <main>
        <div className="font-extrabold text-xl text-blue-gray-900 mb-5">
          {userName || "Hello"}, what's on your mind?
        </div>
        <MainGridSlider slider={menuCarousel} />
        <RestrosCarousel list={restrosCarousel} />
        <SearchBar />
        <Restros resList={cards} />
      </main>
      {/* <Footer /> */}
    </>
  );
};
