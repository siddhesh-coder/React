import React from "react";

export const ShimmerCategory = () => {

  const shimmerElements = Array.from({ length: 8 }, (_, index) => (
    <div key={index} className="shimmerCategory"></div>
  ));

  return <>{shimmerElements}</>;
};

export default ShimmerCategory;
