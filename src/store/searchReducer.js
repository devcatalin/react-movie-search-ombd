import { FETCH_MOVIES, FETCH_MOVIES_FULFILLED, FETCH_MOVIES_FAILED } from "./searchActions";

const initialState = {
  isFetchingMovies: false,
  movies: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES: {
      return {
        ...state,
        isFetchingMovies: true,
      };
    }
    case FETCH_MOVIES_FULFILLED: {
      return {
        ...state,
        isFetchingMovies: false,
      };
    }
    case FETCH_MOVIES_FAILED: {
      return {
        ...state,
        isFetchingMovies: false,
      };
    }
    default:
      return state;
  }
}
