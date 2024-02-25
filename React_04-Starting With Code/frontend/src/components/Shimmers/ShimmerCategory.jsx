import React from "react";

export const ShimmerCategory = () => {

  const shimmerElements = Array.from({ length: 8 }, (_, index) => (
    <div key={index} className="mt-5 flex w-36 h-36 rounded-full mr-7 bg-neutral-200"></div>
  ));

  return <>{shimmerElements}</>;
};

export default ShimmerCategory;
