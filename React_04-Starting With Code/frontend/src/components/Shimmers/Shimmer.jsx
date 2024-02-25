import React from "react";

const Shimmer = () => {
  const renderShimmerCards = (count) => {
    const shimmerCards = [];
    for (let i = 0; i < count; i++) {
      shimmerCards.push(
        <div key={i} className="w-[280px] p-4 h-[360px] rounded-3xl mr-2 ml-2 mt-10">
          <div className="w-full h-[220px] mb-5 bg-[#e6e6e6] rounded-3xl"></div>

          <div className="flex justify-between">
            <div className="w-1/2 h-6 rounded-[10px] bg-[#e6e6e6]"></div>
            <div className="w-[50px] h-6 bg-[#e6e6e6] rounded-[10px] "></div>
          </div>

          <div className="flex justify-between max-w-full">
            <div className="mt-[5px] w-[60%] h-6 rounded-[10px] bg-[#e6e6e6]"></div>
            <div className="mt-[5px] w-[30%] h-[25px] rounded-[10px] bg-[#e6e6e6]"></div>
          </div>

          <div className="text-[15px]">
            <div className="mt-[5px] w-[20%] h-[25px] rounded-[10px] bg-[#e6e6e6]"></div>
          </div>
        </div>
      );
    }
    return shimmerCards;
  };

  return <>{renderShimmerCards(10)}</>;
};

export default Shimmer;
