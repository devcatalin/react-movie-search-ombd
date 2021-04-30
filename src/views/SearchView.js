import React from "react";
import { Input } from "antd";
import { useDebouncedCallback } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { searchMoviesAsync, searchMoviesClear } from "../store/searchActions";

import LoadingSpinner from "../components/LoadingSpinner";
import SearchResults from "../components/SearchResults";

const { Search } = Input;

function SearchView() {
  const dispatch = useDispatch();

  const searchResults = useSelector((store) => store.search.results);
  const searchError = useSelector((store) => store.search.error);
  const isSearching = useSelector((store) => store.search.isSearching);

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
      <label>Search movies:</label>
      <Search onSearch={debouncedSearch} allowClear enterButton />
      {searchError ? (
        <p>{searchError}</p>
      ) : isSearching ? (
        <LoadingSpinner />
      ) : (
        <SearchResults results={searchResults}></SearchResults>
      )}
    </div>
  );
}

export default SearchView;
