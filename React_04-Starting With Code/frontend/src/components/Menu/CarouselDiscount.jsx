import React, { useState } from "react";
import { DISCOUNT_LOGO } from "../../utils/constants";

const Carousel = ({ offs }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 3;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="flex overflow-x-scroll whitespace-nowrap select-none overflow-hidden scrollbar-none off-carousel"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {Array.isArray(offs[0]) ? (
        offs[0].map((el, index) => (
          <div key={index} className="cursor-pointer h-[70px] justify-center flex items-center mix-w-[240px] border border-solid border-[#d8d8d8] box-border p-4 mt-5 mr-3 mb-5 ml-0 rounded-[10px]">
            <img className="w-[25px] h-[25px] mr-[10px]" src={DISCOUNT_LOGO} alt="Image 1" loading="lazy"/>
            <p className="text-sm text-[#686b78] font-semibold">{el.meta}</p>
          </div>
        ))
      ) : (
        <div className="cursor-pointer h-[70px] flex items-center min-w-[240px] border border-solid border-[#d8d8d8] box-border p-4 mt-5 mr-5 mb-5 ml-0 rounded-[10px]">New offers Coming soon....</div>
      )}
    </div>
  );
};

export default Carousel;
