import React from "react";

const Title = ({ children }) => {
  return (
    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
      {children}
    </h2>
  );
};

export default Title;
