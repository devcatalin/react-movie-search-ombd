import axios from "axios";

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const getMovies = async ({ searchText }) => {
  const response = await axios.get("https://www.omdbapi.com/", {
    params: {
      apikey: OMDB_API_KEY,
      s: searchText,
    },
  });
  if (response.data.Response === "False") {
    throw new Error(response.data.Error);
  }
  return {
    results: response.data.Search,
    totalResults: response.data.totalResults,
  };
};

const api = {
  getMovies,
};

export default api;
