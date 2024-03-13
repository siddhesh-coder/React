import React, { useState, useEffect } from "react";
import Button from "../../HOC/Button";

const Filter = ({ resList, setResList }) => {
  const [activeFilters, setActiveFilters] = useState({
    rate: false,
    less: false,
    fast: false,
  });

  useEffect(() => {
    applyFilters();
  }, [activeFilters]);

  const applyFilters = () => {
    let filteredRestros = resList;

    if (activeFilters.rate) {
      filteredRestros = filteredRestros.filter((res) => res.info.avgRating > 4.0);
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
    setActiveFilters({ rate: false, less: false, fast: false });
  };

  return (
    <div data-testid="filters" className="flex">
      <Button
        data_testid="filter_1"
        onClick={() => toggleFilter("rate")}
        isActive={activeFilters.rate}
      >
        Rating's 4.0+
      </Button>
      <Button
        data_testid="filter_2"
        onClick={() => toggleFilter("less")}
        isActive={activeFilters.less}
      >
        Less than ₹300
      </Button>
      <Button
        data_testid="filter_3"
        onClick={() => toggleFilter("fast")}
        isActive={activeFilters.fast}
      >
        Fast Delivery
      </Button>
      <Button onClick={revert}>Clear Filters</Button>
    </div>
  );
};

export default Filter;
