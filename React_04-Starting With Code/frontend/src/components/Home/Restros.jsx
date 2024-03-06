import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Shimmer from "../Shimmers/Shimmer";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";
import LabeledCardContainer from "../../HOC/LabeledCardContainer";
import Button from "../../HOC/Button";

export default Restros = ({ resList }) => {
  const [resLists, setResList] = useState(resList); //useState
  const LabelComponent = LabeledCardContainer(CardContainer); //HOC

  useEffect(() => {
    setResList(resList);
  }, [resList]);

  const giveRes = () => {
    const FilteredRestros = resLists.filter((res) => res.info.avgRating > 4); //filter
    setResList(FilteredRestros);
    console.log('rate');
  };

  const giveLess = () => {
    const FilteredRestros = resLists.filter((res) => {
      const priceStr = res.info.costForTwo.split(' ');
      const priceNum = priceStr[0].split('₹');
      return parseInt(priceNum[1]) < 300;
    });
    setResList(FilteredRestros);
    console.log('less');
  };

  const giveFast = () => {
    const FilteredRestros = resLists.filter((res) => res.info.sla.deliveryTime < 30);
    setResList(FilteredRestros);
    console.log('fast');
  }

  const revert = () => {
    setResList(resList);
    console.log('revert');
  }

  return (
    <>
      <div className="flex">
        <Button onClick={giveRes}>Rating's 4.0+</Button>
        <Button onClick={giveLess}>less then ₹300</Button>
        <Button onClick={giveFast}>Fast Delivery</Button>
        <Button onClick={revert}>Clear Filters</Button>
      </div>

      <div className="flex flex-wrap">
        {resLists.length === 0 ? (
          <Shimmer count={10} />
        ) : (
          resLists.map((restro) => (
            <Link
              key={restro.info.id}
              className="decoration-0 bg-white bg-opacity-75"
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
