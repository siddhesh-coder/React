import React from "react";

export const ShimmerCategory = () => {
  const shimmerElements = Array.from({ length: 8 }, (_, index) => (
    <div
      key={index}
      className="mt-5 flex w-36 h-36 rounded-full mr-7 bg-neutral-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-shimmer1"></div>
    </div>
  ));

  return <>{shimmerElements}</>;
};

export default ShimmerCategory;
