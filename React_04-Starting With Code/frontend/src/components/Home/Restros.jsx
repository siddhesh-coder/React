import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Shimmer from "../Shimmers/Shimmer";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";
import LabeledCardContainer from "../../HOC/LabeledCardContainer";
import Filter from "./Filter";

export default Restros = ({ resList }) => {
  const [resLists, setResList] = useState(resList);
  const LabelComponent = LabeledCardContainer(CardContainer); // HOC

  useEffect(() => {
    setResList(resList);
  }, [resList]);

  return (
    <>
      <Filter resList={resList} setResList={setResList} />
      <div className="flex flex-wrap">
        {resLists.length === 0 ? (
          <Shimmer count={10} />
        ) : (
          resLists.map((restro) => (
            <Link
              key={restro.info.id}
              className="bg-white bg-opacity-75 decoration-0"
              to={"/restaurants/" + restro.info.id}
            >
              {restro.info.avgRating >= 4.5 ? (
                <LabelComponent foodData={restro} />
              ) : (
                <CardContainer foodData={restro} />
              )}
            </Link>
          ))
        )}
      </div>
    </>
  );
};
