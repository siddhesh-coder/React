import React from "react";
import { ResultsBar } from "./ResultsBar";
import { Link } from "react-router-dom";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((results) => {
        const id = results.info.id;
        return (
          <Link key={id} className="per-food-link" to={"/restaurants/" + id}>
            <ResultsBar results={results} key={id} />
          </Link>
        );
      })}
    </div>
  );
};
