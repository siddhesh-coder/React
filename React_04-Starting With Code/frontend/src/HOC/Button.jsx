import React from "react";

const Button = ({ children, onClick, isActive, data_testid }) => {
  return (
    <button
      data-testid={data_testid}
      type="button"
      className={`font-semibold w-[185px] h-10 bg-[#f7f7f7] text-[#3e3e3e] border border-solid border-[#929292] rounded-[30px] mt-10 mr-4 ${
        isActive
          ? "bg-orange-400 font-extrabold text-white border-none"
          : "bg-white"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
