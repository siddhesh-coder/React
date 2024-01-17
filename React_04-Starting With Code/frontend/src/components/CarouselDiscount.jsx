import React, { useState } from "react";
import { DISCOUNT_LOGO } from "../utils/constants";

const Carousel = ({ offs }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const offer = offs[0]?.offers;

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
    const walk = (x - startX) * 3; // Adjust the multiplier to control the scroll speed
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="carousel"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {Array.isArray(offer) ? (
        offer.map((el, index) => (
          <div key={index} className="carousel-item">
            <img src={DISCOUNT_LOGO} alt="Image 1" />
            <p>{el.info.header}</p>
          </div>
        ))
      ) : (
        <div className="carousel-item">New offers Coming soon....</div>
      )}
    </div>
  );
};

export default Carousel;
