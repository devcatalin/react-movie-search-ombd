import React from "react";

function SearchResults({ results }) {
  console.log({ results });
  return (
    <ul>
      {results.map((result) => (
        <li key={result.imdbID}>{result.Title}</li>
      ))}
    </ul>
  );
}

export default SearchResults;
