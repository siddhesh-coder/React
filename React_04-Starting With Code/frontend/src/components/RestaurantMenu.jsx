import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./CarouselDiscount";
import { TimerReset, IndianRupee } from "lucide-react";
import TopPicks from "./TopPicks";

export default RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5912716&lng=73.73890899999999&restaurantId=289340&catalog_qa=undefined&submitAction=ENTER"
        );
        setMenuInfo(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMenu();
  }, []);

  if (!menuInfo) {
    // Add loading state or error handling here
    return null;
  }

  const {
    name,
    isOpen,
    avgRatingString,
    costForTwoMessage,
    areaName,
    totalRatingsString,
    aggregatedDiscountInfoV2,
  } = menuInfo?.cards?.[0]?.card?.card?.info || {};

  const { minDeliveryTime, maxDeliveryTime, lastMileTravelString } =
    menuInfo?.cards[0]?.card?.card?.info.sla || {};

  const cuisine = menuInfo?.cards[0]?.card?.card?.info.cuisines;

  const discount =
    menuInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle || [];

  const banner =
    menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  
  return (
    <div className="menu-card">
      <div className="box-1-resInfo">
        <div className="resName">
          <h3>{name}</h3>
          <div className="resRate">&#x2606; {avgRatingString}</div>
        </div>

        <div className="reslocation">
          <div>
            <div className="oneColorRes">
              {cuisine && cuisine.length > 0
                ? cuisine.join(", ")
                : "No cuisine available"}
            </div>
            <div className="oneColorRes">
              {areaName}, {lastMileTravelString}
            </div>
          </div>
          <div className="resRateCount">{totalRatingsString}</div>
        </div>
      </div>

      <div className="resPricing-time">
        <div className="timerRes">
          <TimerReset />
          <span>
            {minDeliveryTime} - {maxDeliveryTime} MINS
          </span>
        </div>

        <div className="resprice">
          <IndianRupee />
          <span>{costForTwoMessage}</span>
        </div>
      </div>

      <Carousel offs={[discount]} />

      <TopPicks banner={[banner]}/>
    </div>
  );
};
