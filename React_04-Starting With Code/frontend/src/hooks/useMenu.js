import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import { useEffect, useState } from "react";

const useMenu = () => {
  const { resId } = useParams();
  const menuInfo = useRestaurantMenu(resId);
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    if (menuInfo) {
      const {
        name,
        isOpen,
        avgRatingString,
        costForTwoMessage,
        areaName,
        totalRatingsString,
        cuisines,
        sla,
        aggregatedDiscountInfo,
      } = menuInfo?.cards[0]?.card?.card?.info || {};
      const { minDeliveryTime, maxDeliveryTime, lastMileTravelString } =
        sla || {};
      const cuisine = cuisines;
      const discount = aggregatedDiscountInfo?.descriptionList || [];
      const { carousel, title } =
        menuInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card || {};

      let menutabs = [];
      const regularCards =
        menuInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      if (Array.isArray(regularCards)) {
        menutabs = regularCards.filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }

      setMenuData({
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
      });
    }
  }, [menuInfo]);

  return menuData;
};

export default useMenu;
