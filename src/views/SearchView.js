import React from "react";
import { Input, Select } from "antd";
import { useDebouncedCallback } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import {
  searchMoviesAsync,
  searchMoviesClear,
  searchTextChange,
  sortAscending,
  sortDescending,
} from "../store/searchActions";

import LoadingSpinner from "../components/LoadingSpinner";
import MovieList from "../components/MovieList";

const { Search } = Input;
const { Option } = Select;

function SearchView() {
  const dispatch = useDispatch();

  const searchText = useSelector((store) => store.search.searchText);
  const searchResults = useSelector((store) => store.search.results);
  const searchError = useSelector((store) => store.search.error);
  const isSearching = useSelector((store) => store.search.isSearching);

  const onChangeSearch = (value) => {
    dispatch(searchTextChange(value));
  };

  const search = () => {
    if (!searchText || searchText.trim() === "") {
      dispatch(searchMoviesClear());
      return;
    }
    dispatch(
      searchMoviesAsync({
        searchText,
      })
    );
  };

  const onSortChange = (sortType) => {
    if (sortType === "default") {
      search();
    } else if (sortType === "asc") {
      dispatch(sortAscending());
    } else if (sortType === "desc") {
      dispatch(sortDescending());
    }
  };

  const debouncedSearch = useDebouncedCallback(search, 1000);

  return (
    <div>
      <label style={{ fontWeight: 500, fontSize: 22 }}>Search movie:</label>
      <Search
        value={searchText}
        onChange={(e) => onChangeSearch(e.target.value)}
        onSearch={debouncedSearch}
        allowClear
        enterButton
        style={{ marginBottom: 24, width: 500, display: "block" }}
      />
      <div style={{ marginBottom: 25 }}>
        <label>Sort:</label>
        <Select onChange={onSortChange} defaultValue="default" style={{ width: 120, marginLeft: 15 }}>
          <Option value="default">Default</Option>
          <Option value="asc">Ascending</Option>
          <Option value="desc">Descending</Option>
        </Select>
        <label style={{ marginLeft: 20 }}>Filter:</label>
        <Select defaultValue="all" style={{ width: 120, marginLeft: 15 }}>
          <Option value="all">All</Option>
          <Option value="movies">Movies</Option>
          <Option value="series">Series</Option>
          <Option value="episode">Episode</Option>
        </Select>
      </div>
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
