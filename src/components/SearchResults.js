import React from "react";

import { useSelector } from "react-redux";

import MovieCard from "./MovieCard";

function SearchResults({ results }) {
  const favoritesById = useSelector((store) => store.profile.favoritesById);

  const isFavorite = (movieId) => favoritesById[movieId] != null;

  return (
    <ul>
      {results.map((result) => (
        <MovieCard key={result.imdbID} movie={result} isFavorite={isFavorite(result.imdbID)} />
      ))}
    </ul>
  );
}

export default SearchResults;
