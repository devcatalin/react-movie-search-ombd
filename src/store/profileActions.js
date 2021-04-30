export const INSERT_FAVORITE_MOVIE = "INSERT_FAVORITE_MOVIE";
export const REMOVE_FAVORITE_MOVIE = "REMOVE_FAVORITE_MOVIE";

export const insertFavoriteMovie = (movie) => {
  return {
    type: INSERT_FAVORITE_MOVIE,
    payload: { movie },
  };
};

export const removeFavoriteMovie = (movieId) => {
  return {
    type: REMOVE_FAVORITE_MOVIE,
    payload: { movieIdToRemove: movieId },
  };
};
