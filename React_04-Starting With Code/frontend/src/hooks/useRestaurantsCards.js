import React, { useEffect, useState } from "react";

import { SWIGGY_API } from "../utils/constants";

const useRestaurantsCards = () => {
  const [cards, setCards] = useState([]);
  const [menuCarousel, setMenuCarousel] = useState([]);
  const [restrosCarousel, setRestrosCarousel] = useState([]);

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
      setMenuCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      setRestrosCarousel(json?.data?.cards[1]?.card?.card);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { cards, menuCarousel, restrosCarousel };
};

export default useRestaurantsCards;
