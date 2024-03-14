import React from "react";
import MenuCardList from "./MenuCardList";
import { ChevronDown, ChevronUp } from "lucide-react";

export default MenuCard = ({ downmenu, isOpen, setShowIndex }) => {
  const { title, itemCards } = downmenu?.card?.card || "";

   const handleChange = () => {
      setShowIndex();
   }
  
  return (
    <>
      <div className="max-w-7xl h-[70px] flex justify-between items-end pb-[20px] pr-[20px] mt-5 text-lg font-extrabold text-[#3e4152]">
        <span>
          {title} ({itemCards?.length  || 0})
        </span>
        <button data-testid="chevron-test" type="button" className="bg-transparent border-none text-[#282c3f]" onClick={handleChange}>
          {
            isOpen ? <ChevronDown /> : <ChevronUp />
          }
        </button>
      </div>
      { isOpen && itemCards && itemCards.map((el) => <MenuCardList key={el?.card?.info?.id} el={el}/>)}
    </>
  );
};
