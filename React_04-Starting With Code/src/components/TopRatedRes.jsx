import { useState } from "react";
import CardContainer from "./CardContainer";

export default TopRatedRes = ({resList}) => {
  const [resLists, setResList] = useState(resList); //useState

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
        {resLists.map((restro) => (
          <CardContainer key={restro.info.id} foodData={restro} />
        ))}
      </div>
    </>
  );
};
