import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <button
      type='button'
      className={`font-semibold w-[185px] h-10 bg-[#f7f7f7] text-[#3e3e3e] border border-solid border-[#929292] rounded-[30px] mt-10 mr-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
