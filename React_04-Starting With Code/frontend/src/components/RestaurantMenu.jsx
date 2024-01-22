import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./CarouselDiscount";
import { TimerReset, IndianRupee } from "lucide-react";
import TopPicks from "./TopPicks";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";

export default RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5679146&lng=73.91434319999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
          )}`
        );
        setMenuInfo(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchMenu();
  }, []);

  if (!menuInfo) {
    // Add loading state or error handling here
    return;
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
    menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const menuLength =
    menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const n = menuLength.length;

  const menutabs = [];

  for (let i = 2; i <= n - 3; i++) {
    const menutab =
      menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card
        ?.card;
    menutabs.push(menutab);
  }

  return (
    <div className="menu-card">
      <div className="box-1-resInfo">
        <div className="resName">
          <h3>{name}</h3>
          <h4>
            {isOpen ? (
              <span className="open-tag">OPEN</span>
            ) : (
              <span className="closed-tag">CLOSED</span>
            )}
          </h4>

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

      {banner && <TopPicks banner={[banner]} />}

      {menutabs.map((tab, index) => (
        <MenuCard key={index} downmenu={tab} />
      ))}
    </div>
  );
};
