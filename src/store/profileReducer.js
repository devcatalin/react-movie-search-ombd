import { INSERT_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE } from "./profileActions";

const initialState = {
  name: "",
  favoritesById: {},
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case INSERT_FAVORITE_MOVIE: {
      const { movie } = action.payload;
      return {
        ...state,
        favoritesById: {
          ...state.favoritesById,
          [movie.imdbID]: movie,
        },
      };
    }
    case REMOVE_FAVORITE_MOVIE: {
      const { movieIdToRemove } = action.payload;
      return {
        ...state,
        favoritesById: Object.fromEntries(
          Object.entries(state.favoritesById).filter(([movieId]) => movieId !== movieIdToRemove)
        ),
      };
    }
    default:
      return state;
  }
}
