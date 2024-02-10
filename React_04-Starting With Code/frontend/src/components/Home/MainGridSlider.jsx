import React from "react";
import ShimmerCategory from "../Shimmers/ShimmerCategory";
import SliderItems from "./SliderItems";

const MainGridSlider = ({ slider }) => {
  return (
    <div className="mainGrid-carousel">
      {slider.length === 0 ? (
        <ShimmerCategory />
      ) : (
        <SliderItems slider={slider} />
      )}
    </div>
  );
};

export default MainGridSlider;
