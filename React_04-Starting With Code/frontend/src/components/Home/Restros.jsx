import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Shimmer from "../Shimmers/Shimmer";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";
import LabeledCardContainer from "../../HOC/LabeledCardContainer";
import Button from "../../HOC/Button";

export default Restros = ({ resList }) => {
  const [resLists, setResList] = useState(resList);
  const LabelComponent = LabeledCardContainer(CardContainer); // HOC

  const [activeFilters, setActiveFilters] = useState({
    rate: false,
    less: false,
    fast: false,
  });

  useEffect(() => {
    setResList(resList);
  }, [resList]);

  const applyFilters = () => {
    let filteredRestros = resList;

    if (activeFilters.rate) {
      filteredRestros = filteredRestros.filter((res) => res.info.avgRating > 4);
    }

    if (activeFilters.less) {
      filteredRestros = filteredRestros.filter((res) => {
        const priceStr = res.info.costForTwo.split(" ");
        const priceNum = parseInt(priceStr[0].split("₹")[1]);
        return priceNum < 300;
      });
    }

    if (activeFilters.fast) {
      filteredRestros = filteredRestros.filter(
        (res) => res.info.sla.deliveryTime < 30
      );
    }

    setResList(filteredRestros);
  };

  const toggleFilter = (filter) => {
    setActiveFilters((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };

  const revert = () => {
    setResList(resList);
    setActiveFilters({
      rate: false,
      less: false,
      fast: false,
    });
  };
  return (
    <>
      <div className="flex">
        <Button
          onClick={() => {
            toggleFilter("rate");
            applyFilters();
          }}
          isActive={activeFilters.rate}
        >
          Rating's 4.0+
        </Button>
        <Button
          onClick={() => {
            toggleFilter("less");
            applyFilters();
          }}
          isActive={activeFilters.less}
        >
          Less than ₹300
        </Button>
        <Button
          onClick={() => {
            toggleFilter("fast");
            applyFilters();
          }}
          isActive={activeFilters.fast}
        >
          Fast Delivery
        </Button>
        <Button onClick={revert}>Clear Filters</Button>
      </div>

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
