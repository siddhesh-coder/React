import React from "react";
import MenuCardList from "./MenuCardList";
import { ChevronDown } from "lucide-react";

export default MenuCard = (rec) => {
  const { recommended } = rec;
  const { title, itemCards } = recommended;

  console.log(itemCards);

  return (
    <>
      <div className="recommended-tab">
        <span>
          {title} ({itemCards.length})
        </span>
        <button>
          <ChevronDown />
        </button>
      </div>
      {itemCards.map((el) => <MenuCardList key={el?.card?.info?.id} el={el}/>)}
    </>
  );
};
