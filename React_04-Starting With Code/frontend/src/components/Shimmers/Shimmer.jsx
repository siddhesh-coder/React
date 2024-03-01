import React from "react";

const Shimmer = (props) => {
  const { count } = props;
  const renderShimmerCards = (count) => {
    const shimmerCards = [];
    for (let i = 0; i < count; i++) {
      shimmerCards.push(
        <div key={i} className="w-[280px] p-4 h-[360px] rounded-3xl mr-2 ml-2 mt-10 relative overflow-hidden">
          <div className="w-full h-[220px] mb-5 bg-[#e6e6e6] rounded-3xl animate-pulse"></div>

          <div className="flex justify-between">
            <div className="w-1/2 h-6 rounded-[10px] bg-[#e6e6e6] animate-pulse"></div>
            <div className="w-[50px] h-6 bg-[#e6e6e6] rounded-[10px] animate-pulse"></div>
          </div>

          <div className="flex justify-between max-w-full">
            <div className="mt-[5px] w-[60%] h-6 rounded-[10px] bg-[#e6e6e6] animate-pulse"></div>
            <div className="mt-[5px] w-[30%] h-[25px] rounded-[10px] bg-[#e6e6e6] animate-pulse"></div>
          </div>

          <div className="text-[15px]">
            <div className="mt-[5px] w-[20%] h-[25px] rounded-[10px] bg-[#e6e6e6] animate-pulse"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-shimmer2"></div>
        </div>
      );
    }
    return shimmerCards;
  };

  return <>{renderShimmerCards(count)}</>;
};

export default Shimmer;
