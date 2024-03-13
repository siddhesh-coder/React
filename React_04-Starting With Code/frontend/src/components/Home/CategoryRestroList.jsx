import React from "react";
import Shimmer from "../Shimmers/Shimmer";
import CardContainer from "./CardContainer";
import { Link } from "react-router-dom";

export default CategoryRestroList = ({category}) => {
  return (
    <div className="flex flex-wrap">
      {category.length === 0 ? (
        <Shimmer count={6} />
      ) : (
        category.slice(4).map((restro) => {
          const { id } = restro?.card?.card?.info || "";
          const restros = restro?.card?.card;
          return (
            <Link
              key={id}
              className="no-underline text-[#02060c] text-opacity-75"
              to={"/restaurants/" + id}
            >
              <CardContainer foodData={restros} />
            </Link>
          );
        })
      )}
    </div>
  );
};
