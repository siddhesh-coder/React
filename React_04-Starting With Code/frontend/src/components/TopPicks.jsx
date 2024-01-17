import React, { useState } from "react";
import { CRAOUSEL_IMG } from "../utils/constants";

const TopPicks = ({ banner }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const { carousel } = banner[0] || {};
  const [banners, setBanners] = useState(carousel || []);

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
    <>
      <h2 className="top-picks">Top Picks</h2>
      <div
        className='carousel2'
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {banners.map((bannerItem) => (
          <div key={bannerItem.bannerId} className="carousel-item2">
            <img src={`${CRAOUSEL_IMG}${bannerItem.creativeId}`} alt={`Image ${bannerItem.bannerId}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TopPicks;
