import React from "react";
import { SLIDER_MENU } from "../utils/constants";
import ShimmerCategory from "./ShimmerCategory";

const MainGridParts = ({ image }) => {
  return (
    <img className="menuSliderImg" src={SLIDER_MENU + image} alt="" />
  );
};

export default MainGridParts;
