import React from "react";
import { ResultsBar } from "./ResultsBar";
import { Link } from "react-router-dom";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="absolute top-[52px] w-full bg-white flex flex-col max-h-[500px] overflow-y-auto p-0 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] z-20">
      {results.map((result) => {
        const id = result?.info?.id;
        return (
          <Link data-testid="search-result" key={id} className="text-blue-900 text-opacity-75 no-underline" to={"/restaurants/" + id}>
            <ResultsBar result={result} key={id} />
          </Link>
        );
      })}
    </div>
  );
};
