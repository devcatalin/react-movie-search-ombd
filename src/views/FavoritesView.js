import React from "react";

import { useSelector } from "react-redux";

import MovieList from "../components/MovieList";

function FavoritesView() {
  const favoritesById = useSelector((store) => store.profile.favoritesById);
  const movies = Object.values(favoritesById);
  return <MovieList movies={movies} />;
}

export default FavoritesView;
