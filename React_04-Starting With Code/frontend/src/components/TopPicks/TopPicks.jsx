import React, { useState } from "react";
import { CRAOUSEL_IMG } from "../../utils/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TopPicks = ({ banner }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? banner.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === banner.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <h2 className="mt-5 border-t border-solid pt-5 border-[#9c9c9c]">
        Top Picks
      </h2>
      <div className="max-w-[1400px] h-[480px] w-full m-auto py-3 px-3 relative group">
        <div
          style={{
            backgroundImage: `url(${CRAOUSEL_IMG}${banner[currentIndex].creativeId})`,
          }}
          className="absolute left-52 w-1/2 h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-slate-800  cursor-pointer">
          <ChevronLeft onClick={prevSlide} size={30} />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-slate-800 cursor-pointer">
          <ChevronRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </>
  );
};

export default TopPicks;
