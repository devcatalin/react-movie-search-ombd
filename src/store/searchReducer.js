import {
  SEARCH_MOVIES_INIT,
  SEARCH_MOVIES_FULFILLED,
  SEARCH_MOVIES_FAILED,
  SEARCH_MOVIES_CLEAR,
  SEARCH_TEXT_CHANGE,
  SORT_ASCENDING,
  SORT_DESCENDING,
} from "./searchActions";

const initialState = {
  isSearching: false,
  searchText: "",
  results: [],
  totalResults: 0,
  error: null,
};

const compareMovieTitles = (a, b) => {
  if (a.Title < b.Title) {
    return -1;
  }
  if (a.Title > b.Title) {
    return 1;
  }
  return 0;
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
    case SEARCH_TEXT_CHANGE: {
      return {
        ...state,
        searchText: action.payload.searchText,
      };
    }
    case SORT_ASCENDING: {
      return {
        ...state,
        results: [...state.results.sort(compareMovieTitles)],
      };
    }
    case SORT_DESCENDING: {
      return {
        ...state,
        results: [...state.results.sort(compareMovieTitles).reverse()],
      };
    }
    default:
      return state;
  }
}
