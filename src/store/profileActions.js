export const SET_PROFILE = "SET_PROFILE";
export const INSERT_FAVORITE_MOVIE = "INSERT_FAVORITE_MOVIE";
export const REMOVE_FAVORITE_MOVIE = "REMOVE_FAVORITE_MOVIE";

const getLocalProfile = () => {
  const profileJson = localStorage.getItem("profile");

  let profile = null;
  if (!profileJson) {
    profile = { favoritesById: {} };
  } else {
    profile = JSON.parse(profileJson);
  }

  return profile;
};

const saveLocalProfile = (profile) => {
  localStorage.setItem("profile", JSON.stringify(profile));
};

export const createInsertFavoriteMovieAction = (movie) => {
  return {
    type: INSERT_FAVORITE_MOVIE,
    payload: { movie },
  };
};

export const createRemoveFavoriteMovieAction = (movieId) => {
  return {
    type: REMOVE_FAVORITE_MOVIE,
    payload: { movieIdToRemove: movieId },
  };
};

export const createSetProfileAction = (profile) => {
  return {
    type: SET_PROFILE,
    payload: { profile },
  };
};

export const initLocalProfile = () => {
  return (dispatch) => {
    const profile = getLocalProfile();
    dispatch(createSetProfileAction(profile));
  };
};

export const insertFavoriteMovie = (movie) => {
  return (dispatch) => {
    dispatch(createInsertFavoriteMovieAction(movie));

    const profile = getLocalProfile();
    profile.favoritesById[movie.imdbID] = movie;
    saveLocalProfile(profile);
  };
};

export const removeFavoriteMovie = (movieId) => {
  return (dispatch) => {
    dispatch(createRemoveFavoriteMovieAction(movieId));

    const profile = getLocalProfile();
    delete profile.favoritesById[movieId];
    saveLocalProfile(profile);
  };
};
