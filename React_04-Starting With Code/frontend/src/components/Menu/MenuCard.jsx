import React, { useEffect, useState } from "react";
import MenuCardList from "./MenuCardList";
import { ChevronDown, ChevronUp } from "lucide-react";

export default MenuCard = ({ downmenu, isOpen, setShowIndex }) => {
  const [titleAccordion, setTitleAccordion] = useState("");
  const [itemsCard, setItemsCard] = useState([]);

  useEffect(() => {
    const { title, itemCards } = downmenu?.card?.card;
    setTitleAccordion(title);
    setItemsCard(itemCards);
  }, [downmenu]);

  const handleChange = () => {
    setShowIndex();
  };

  return (
    <>
      <div className="max-w-7xl h-[70px] flex justify-between items-end pb-[20px] pr-[20px] mt-5 text-lg font-extrabold text-[#3e4152]">
        <span>
          {titleAccordion} ({itemsCard?.length || 0})
        </span>
        <button
          data-testid="chevron-test"
          type="button"
          className="bg-transparent border-none text-[#282c3f]"
          onClick={handleChange}
        >
          {isOpen ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>
      {isOpen &&
        itemsCard &&
        itemsCard.map((el) => (
          <MenuCardList key={el?.card?.info?.id} el={el} />
        ))}
    </>
  );
};
