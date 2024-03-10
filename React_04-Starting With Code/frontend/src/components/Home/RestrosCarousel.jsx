import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmers/Shimmer";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";
import LabeledCardContainer from "../../HOC/LabeledCardContainer";

const RestrosCarousel = ({ list }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [heading, setHeading] = useState("");

  useEffect(() => {
    if (
      list &&
      list.header &&
      list.gridElements &&
      list.gridElements.infoWithStyle
    ) {
      const { header, gridElements } = list;
      const { title } = header || "";
      const { restaurants: restaurantsData } = gridElements.infoWithStyle || [];
      setRestaurants(restaurantsData || []);
      setHeading(title);
    }
  }, [list]);

  const LabelComponent = LabeledCardContainer(CardContainer);

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-extrabold text-[#02060c] opacity-90">{heading}</h2>
      <div className="flex w-[1400px] overflow-x-scroll mb-5 off-carousel">
        {restaurants && restaurants.length === 0 ? (
          <Shimmer count={5} />
        ) : (
          restaurants.map((restro) => (
            <Link
              key={restro?.info?.id}
              className="bg-white bg-opacity-75 decoration-0"
              to={restro?.info ? "/restaurants/" + restro?.info?.id : ""}
            >
              {restro?.info?.avgRating >= 4.5 ? (
                <LabelComponent foodData={restro} />
              ) : (
                <CardContainer foodData={restro} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default RestrosCarousel;
