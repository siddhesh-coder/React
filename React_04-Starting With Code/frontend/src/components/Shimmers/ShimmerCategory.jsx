import React from "react";

export const ShimmerCategory = () => {
  const shimmerElements = Array.from({ length: 8 }, (_, index) => (
    <div
      key={index}
      className="relative flex mt-5 overflow-hidden rounded-full w-36 h-36 mr-7 bg-neutral-200"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-pulse"></div>
    </div>
  ));

  return <>{shimmerElements}</>;
};

export default ShimmerCategory;
