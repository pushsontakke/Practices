import React from "react";
import "./SearchResults.css";

export const SearchResults = ({result}) => {
  return (
    <div className="result-list">
      {result.map((user, id) => {
        return <div className="resultOnly" key={id}>{user.name}</div>;
      })}
    </div>
  );
};
