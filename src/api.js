import axios from "axios";

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const getMovies = async ({ searchText, searchType }) => {
  console.log({ searchType });
  const params = {
    apikey: OMDB_API_KEY,
    s: searchText,
  };

  if (searchType) {
    params.type = searchType;
  }

  const response = await axios.get("https://www.omdbapi.com/", {
    params,
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
