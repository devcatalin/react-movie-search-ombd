import api from "../api";

export const SEARCH_MOVIES_INIT = "SEARCH_MOVIES_INIT";
export const SEARCH_MOVIES_FULFILLED = "SEARCH_MOVIES_FULFILLED";
export const SEARCH_MOVIES_FAILED = "SEARCH_MOVIES_FAILED";
export const SEARCH_MOVIES_CLEAR = "SEARCH_MOVIES_CLEAR";
export const SEARCH_TEXT_CHANGE = "SEARCH_TEXT_CHANGE";

export const SORT_ASCENDING = "SORT_ASCENDING";
export const SORT_DESCENDING = "SORT_DESCENDING";

export const SET_SEARCH_TYPE = "SET_SEARCH_TYPE";

export const setSearchType = (searchType) => {
  return {
    type: SET_SEARCH_TYPE,
    payload: { searchType },
  };
};

export const sortAscending = (sortProp) => {
  return {
    type: SORT_ASCENDING,
    payload: { sortProp }
  };
};

export const sortDescending = (sortProp) => {
  return {
    type: SORT_DESCENDING,
    payload: { sortProp }
  };
};

export const searchTextChange = (searchText) => {
  return {
    type: SEARCH_TEXT_CHANGE,
    payload: { searchText },
  };
};

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

export const searchMoviesAsync = ({ searchText, searchType }) => {
  return function (dispatch) {
    dispatch(searchMoviesInit());
    api
      .getMovies({ searchText, searchType })
      .then(({ results, totalResults }) => dispatch(searchMoviesFulfilled({ results, totalResults })))
      .catch((error) => dispatch(searchMoviesFailed(error.message)));
  };
};
