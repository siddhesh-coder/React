import React, { useState } from "react";
import MenuCardList from "./MenuCardList";
import { ChevronDown, ChevronUp } from "lucide-react";

export default MenuCard = (tabs) => {
  const { downmenu } = tabs;
  const { title, itemCards } = downmenu;

  const [isOpen, setisOpen] = useState(true);

   const handleChange = () => {
      setisOpen(!isOpen);
   }

  return (
    <>
      <div className="recommended-tab">
        <span>
          {title} ({itemCards?.length  || 0})
        </span>
        <button className="menudown-btn" onClick={handleChange}>
          {
            isOpen ? <ChevronDown /> : <ChevronUp />
          }
        </button>
      </div>
      { isOpen && itemCards && itemCards.map((el) => <MenuCardList key={el?.card?.info?.id} el={el}/>)}
    </>
  );
};
