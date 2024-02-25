import React from "react";
import { SLIDER_MENU } from "../../utils/constants";

const MainGridParts = ({ image }) => {
  return (
    <img className="menuSliderImg" src={SLIDER_MENU + image} alt="" loading="lazy"/>
  );
};

export default MainGridParts;
