import React from "react";

import { Input } from "antd";

const { Search } = Input;

function SearchView() {
  const onSearch = (value) => console.log(value);

  return (
    <div>
      <label>Search movies:</label>
      <Search onSearch={onSearch} />
    </div>
  );
}

export default SearchView;
