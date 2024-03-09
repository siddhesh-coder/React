import React from "react";
import mainLogo from "../../assets/foodload.gif";

export const FoodLoader = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <img
        className="w-[300px] h-[250px]"
        src={mainLogo}
        alt="Loading..."
        loading="lazy"
      />
    </div>
  );
};

export default FoodLoader;
