import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Shimmer from "./Shimmer";

export default TopRatedRes = ({resList}) => {
  const [resLists, setResList] = useState(resList); //useState

  useEffect(() => {
    setResList(resList);
  }, [resList]);

  //handler function for state
  const giveRes = () => {
    const FilteredRestros = resLists.filter((res) => res.info.avgRating > 4); //filter
    setResList(FilteredRestros);
  };

  return (
    <>
      <button className="rated-btn" onClick={giveRes}>
        Top Rated Restaurants
      </button>
      
      <div id="card-container">
        
        {/* conditional rendering */}
        {resLists.length === 0 ? (
          <Shimmer />
        ) : (
          resLists.map((restro) => (
            <CardContainer key={restro.info.id} foodData={restro} />
          ))
        )}
      </div>
    </>
  );
};
