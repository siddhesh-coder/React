import React from "react";
import { Link } from "react-router-dom";

const List = ({children}) => {
  return (
      <li className="mb-4">
        <Link to={'/'} className="hover:underline">
         {children}
        </Link>
      </li>
  );
};

export default List;
