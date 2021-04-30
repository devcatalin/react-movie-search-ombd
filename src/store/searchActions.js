import api from "../api";

export const SEARCH_MOVIES_INIT = "SEARCH_MOVIES_INIT";
export const SEARCH_MOVIES_FULFILLED = "SEARCH_MOVIES_FULFILLED";
export const SEARCH_MOVIES_FAILED = "SEARCH_MOVIES_FAILED";
export const SEARCH_MOVIES_CLEAR = "SEARCH_MOVIES_CLEAR";

export const searchMoviesInit = () => {
  return {
    type: SEARCH_MOVIES_INIT,
  };
};

export const searchMoviesFulfilled = ({ results, totalResults }) => {
  return {
    type: SEARCH_MOVIES_FULFILLED,
    payload: { results, totalResults },
  };
};

export const searchMoviesFailed = (error) => {
  return {
    type: SEARCH_MOVIES_FAILED,
    payload: { error },
  };
};

export const searchMoviesClear = () => {
  return {
    type: SEARCH_MOVIES_CLEAR,
  };
};

export const searchMoviesAsync = ({ searchText }) => {
  return function (dispatch) {
    dispatch(searchMoviesInit());
    api
      .getMovies({ searchText })
      .then(({ results, totalResults }) => dispatch(searchMoviesFulfilled({ results, totalResults })))
      .catch((error) => dispatch(searchMoviesFailed(error.message)));
  };
};
