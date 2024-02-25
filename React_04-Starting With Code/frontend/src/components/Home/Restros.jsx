import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Shimmer from "../Shimmers/Shimmer";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";
import LabeledCardContainer from "../../HOC/LabeledCardContainer";

export default Restros = ({ resList }) => {
  const [resLists, setResList] = useState(resList); //useState
  const LabelComponent = LabeledCardContainer(CardContainer); //HOC

  useEffect(() => {
    setResList(resList);
  }, [resList]);

  const giveRes = () => {
    const FilteredRestros = resLists.filter((res) => res.info.avgRating > 4); //filter
    setResList(FilteredRestros);
  };

  return (
    <>
      <button
        className="font-semibold w-[185px] h-10 bg-[#f7f7f7] text-[#3e3e3e] border border-solid border-[#929292] rounded-[30px] mt-10"
        onClick={giveRes}
      >
        Top Rated Restaurants
      </button>

      <div className="flex flex-wrap">
        {resLists.length === 0 ? (
          <Shimmer />
        ) : (
          resLists.map((restro) => (
            <Link
              key={restro.info.id}
              className="decoration-0 bg-white bg-opacity-75"
              to={"/restaurants/" + restro.info.id}
            >
              {
                restro.info.avgRating >= 4.5 ? <LabelComponent foodData={restro}/> : <CardContainer foodData={restro} />
              }
            </Link>
          ))
        )}
      </div>
    </>
  );
};
