export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_FAILED = "FETCH_MOVIES_FAILED";

export const fetchMovies = () => {
  return {
    type: FETCH_MOVIES,
  };
};

export const fetchMoviesFulfilled = () => {
  return {
    type: FETCH_MOVIES_FULFILLED,
  };
};

export const fetchMoviesFailed = () => {
  return {
    type: FETCH_MOVIES_FAILED,
  };
};
