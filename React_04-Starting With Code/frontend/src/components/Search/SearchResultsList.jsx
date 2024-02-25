import React from "react";
import { ResultsBar } from "./ResultsBar";
import { Link } from "react-router-dom";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="absolute top-12 w-full bg-white flex flex-col max-h-[500px] overflow-y-auto z-9 p-0 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      {results.map((results) => {
        const id = results.info.id;
        return (
          <Link key={id} className="no-underline text-blue-900 text-opacity-75" to={"/restaurants/" + id}>
            <ResultsBar results={results} key={id} />
          </Link>
        );
      })}
    </div>
  );
};
