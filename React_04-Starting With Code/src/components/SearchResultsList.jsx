import React from "react";
import { ResultsBar } from "./ResultsBar";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((results) => {
        const id = results.info.id;
        return <ResultsBar results={results} key={id}/>;
      })}
    </div>
  );
};
