import { FETCH_MOVIES, FETCH_MOVIES_FULFILLED, FETCH_MOVIES_FAILED } from "./actions";

const initialState = {
  isFetchingMovies: false,
  movies: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES: {
      return state;
    }
    case FETCH_MOVIES_FULFILLED: {
      return state;
    }
    case FETCH_MOVIES_FAILED: {
      return state;
    }
    default:
      return state;
  }
}
