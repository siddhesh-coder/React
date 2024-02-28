import React from "react";
import { SLIDER_MENU } from "../../utils/constants";

const MainGridParts = ({ image }) => {
  return (
    <div className="w-[150px] h-[200px] mr-[30px]">
      <img
        src={SLIDER_MENU + image}
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default MainGridParts;
