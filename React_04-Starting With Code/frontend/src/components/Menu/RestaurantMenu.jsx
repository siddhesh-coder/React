import React, { useEffect, useState } from "react";
import Carousel from "./CarouselDiscount";
import { TimerReset, IndianRupee, Loader } from "lucide-react";
import TopPicks from "../TopPicks/TopPicks";
import MenuCard from "./MenuCard";
import FoodLoader from "../Home/FoodLoader";
import useMenu from "../../hooks/useMenu";

export default RestaurantMenu = () => {
  const menuData = useMenu();
  const [showIndex, setShowIndex] = useState(0);
  const [prevClickIndex, setPrevClickIndex] = useState(null);
  const [state, setState] = useState({
    cuisine: "",
    discount: "",
    carousel: "",
    title: "",
    menutabs: [],
    minDeliveryTime: "",
    maxDeliveryTime: "",
    lastMileTravelString: "",
    name: "",
    isOpen: "",
    avgRatingString: "",
    costForTwoMessage: "",
    areaName: "",
    totalRatingsString: "",
  });

  useEffect(() => {
    if (menuData) {
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

      setState((prevState) => ({
        ...prevState,
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
      }));
    }
  }, [menuData]);

  if (!menuData) {
    return <FoodLoader/>;
  }

  const checkIsOpen = (index) => {
    return index === showIndex && prevClickIndex !== showIndex;
  };

  return (
    <div className="w-[100vw] h-min-[100vh] flex justify-center items-center">
      <div className="w-[800px] relative top-[100px] mb-28">
        <div className="border-[#9c9c9c] border-b border-dashed pt-[15px] pr-[10px] pb-[15px] pl-0">
          <div className="flex justify-between">
            <h3 className="font-extrabold">{state.name}</h3>
            <h4>
              {state.isOpen ? (
                <span className="text-green-500">OPEN</span>
              ) : (
                <span className="text-red-500">CLOSED</span>
              )}
            </h4>

            <div className="w-[90px] border-solid border border-[#d8d8d8] text-sm text-center pt-1 text-[#3d9b6d] rounded-t">
              &#x2606; {state.avgRatingString}
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <div className="text-[#7e808c] text-[13px] leading-4 font-light">
                {state.cuisine && state.cuisine.length > 0
                  ? state.cuisine.join(", ")
                  : "No cuisine available"}
              </div>
              <div className="text-[#7e808c] text-[13px] leading-4 font-light">
                Location: {state.areaName}, {state.lastMileTravelString}
              </div>
            </div>
            <div className="w-[90px] border border-solid border-[#d8d8d8] h-8 text-xs pl-2 pt-[5px] font-semibold text-[#8b8d97] rounded-b">
              {state.totalRatingsString}
            </div>
          </div>
        </div>

        <div className="flex mt-5 mb-0 ml-0 mr-5">
          <div className="flex items-center justify-center">
            <TimerReset />
            <span className="ml-4 font-bold text-base text-[#3e4152]">
              {state.minDeliveryTime} - {state.maxDeliveryTime} MINS
            </span>
          </div>

          <div className="flex items-center justify-center ml-4">
            <IndianRupee />
            <span className="ml-4 font-bold text-base text-[#3e4152]">
              {state.costForTwoMessage}
            </span>
          </div>
        </div>
        <Carousel offs={[state.discount]} />
        {state.carousel && <TopPicks banner={state.carousel} title={state.title} />}

        {state.menutabs.map((tab, index) => (
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
