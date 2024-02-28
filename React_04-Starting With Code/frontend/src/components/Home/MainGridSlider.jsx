import React from "react";
import ShimmerCategory from "../Shimmers/ShimmerCategory";
import SliderItems from "./SliderItems";

const MainGridSlider = ({ slider }) => {
  return (
    <div className="flex max-w-[1400px] w-full mb-3 m-auto py-3 relative overflow-x-scroll off-carousel">
      {slider.length === 0 ? (
        <ShimmerCategory />
      ) : (
        <SliderItems slider={slider} />
      )}
    </div>
  );
};

export default MainGridSlider;
