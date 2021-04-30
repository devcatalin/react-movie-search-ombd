import React, { useEffect } from "react";
import { Input } from "antd";
import { useDebouncedCallback } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { searchMoviesAsync, searchMoviesClear } from "../store/searchActions";
import { useLocation } from "react-router-dom";

import LoadingSpinner from "../components/LoadingSpinner";
import MovieList from "../components/MovieList";

const { Search } = Input;

function SearchView() {
  const dispatch = useDispatch();
  const location = useLocation();

  const searchResults = useSelector((store) => store.search.results);
  const searchError = useSelector((store) => store.search.error);
  const isSearching = useSelector((store) => store.search.isSearching);

  useEffect(() => {
    dispatch(searchMoviesClear());
  }, [dispatch, location]);

  const search = (value) => {
    if (!value || value.trim() === "") {
      dispatch(searchMoviesClear());
      return;
    }
    dispatch(
      searchMoviesAsync({
        searchText: value,
      })
    );
  };

  const debouncedSearch = useDebouncedCallback(search, 1000);

  return (
    <div>
      <label style={{ fontWeight: 500, fontSize: 22 }}>Search movie:</label>
      <Search
        onSearch={debouncedSearch}
        allowClear
        enterButton
        style={{ marginBottom: 24, width: 500, display: "block" }}
      />
      {searchError ? (
        <p>{searchError}</p>
      ) : isSearching ? (
        <LoadingSpinner />
      ) : (
        <MovieList movies={searchResults}></MovieList>
      )}
    </div>
  );
}

export default SearchView;
