import React, { useState } from "react";
import Carousel from "./CarouselDiscount";
import { TimerReset, IndianRupee } from "lucide-react";
import TopPicks from "../TopPicks/TopPicks";
import MenuCard from "./MenuCard";
import FoodLoader from "../Home/FoodLoader";
import useMenu from "../../hooks/useMenu";

export default RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const [prevClickIndex, setPrevClickIndex] = useState(null);
  const menuData = useMenu();

  if (!menuData) {
    return <FoodLoader />;
  }

  const {
    cuisine,
    discount,
    carousel,
    title,
    menutabs,
    minDeliveryTime,
    maxDeliveryTime,
    lastMileTravelString,
    name,
    isOpen,
    avgRatingString,
    costForTwoMessage,
    areaName,
    totalRatingsString,
  } = menuData;

  const checkIsOpen = (index) => {
    return index === showIndex && prevClickIndex !== showIndex;
  };

  return (
    <div className="w-[100vw] h-min-[100vh] flex justify-center items-center">
      <div className="w-[800px] relative top-[100px] mb-28">
        <div className="border-[#9c9c9c] border-b border-dashed pt-[15px] pr-[10px] pb-[15px] pl-0">
          <div className="flex justify-between">
            <h3 className="font-extrabold">{name}</h3>
            <h4>
              {isOpen ? (
                <span className="text-green-500">OPEN</span>
              ) : (
                <span className="text-red-500">CLOSED</span>
              )}
            </h4>

            <div className="w-[90px] border-solid border border-[#d8d8d8] text-sm text-center pt-1 text-[#3d9b6d] rounded-t">
              &#x2606; {avgRatingString}
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <div className="text-[#7e808c] text-[13px] leading-4 font-light">
                {cuisine && cuisine.length > 0
                  ? cuisine.join(", ")
                  : "No cuisine available"}
              </div>
              <div className="text-[#7e808c] text-[13px] leading-4 font-light">
                Location: {areaName}, {lastMileTravelString}
              </div>
            </div>
            <div className="w-[90px] border border-solid border-[#d8d8d8] h-8 text-xs pl-2 pt-[5px] font-semibold text-[#8b8d97] rounded-b">
              {totalRatingsString}
            </div>
          </div>
        </div>

        <div className="flex mt-5 mb-0 ml-0 mr-5">
          <div className="flex items-center justify-center">
            <TimerReset />
            <span className="ml-4 font-bold text-base text-[#3e4152]">
              {minDeliveryTime} - {maxDeliveryTime} MINS
            </span>
          </div>

          <div className="flex items-center justify-center ml-4">
            <IndianRupee />
            <span className="ml-4 font-bold text-base text-[#3e4152]">
              {costForTwoMessage}
            </span>
          </div>
        </div>
        <Carousel offs={[discount]} />
        {carousel && <TopPicks banner={carousel} title={title} />}

        {menutabs.map((tab, index) => (
          <MenuCard
            key={tab?.card?.card?.title}
            downmenu={tab}
            isOpen={checkIsOpen(index)}
            setShowIndex={() => {
              setPrevClickIndex(showIndex);
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
