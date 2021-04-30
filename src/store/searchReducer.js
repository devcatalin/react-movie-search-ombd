import {
  SEARCH_MOVIES_INIT,
  SEARCH_MOVIES_FULFILLED,
  SEARCH_MOVIES_FAILED,
  SEARCH_MOVIES_CLEAR,
} from "./searchActions";

const initialState = {
  isSearching: false,
  results: [],
  totalResults: 0,
  error: null,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES_INIT: {
      return {
        ...state,
        isSearching: true,
        error: null,
      };
    }
    case SEARCH_MOVIES_FULFILLED: {
      return {
        ...state,
        isSearching: false,
        results: action.payload.results,
      };
    }
    case SEARCH_MOVIES_FAILED: {
      return {
        ...state,
        isSearching: false,
        error: action.payload.error,
      };
    }
    case SEARCH_MOVIES_CLEAR: {
      return {
        ...state,
        isSearching: false,
        error: null,
        results: [],
      };
    }
    default:
      return state;
  }
}
