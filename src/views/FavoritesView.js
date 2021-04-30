import React from "react";

import MovieCard from "../components/MovieCard";

import { useSelector } from "react-redux";

function FavoritesView() {
  const favoritesById = useSelector((store) => store.profile.favoritesById);
  const movies = Object.values(favoritesById);
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} isFavorite={true} movie={movie} />
      ))}
    </div>
  );
}

export default FavoritesView;
