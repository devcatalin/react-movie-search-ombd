import { createStore, combineReducers } from "redux";

import profileReducer from "./profileReducer";
import searchReducer from "./searchReducer";

const store = createStore(
  combineReducers({
    profile: profileReducer,
    search: searchReducer,
  })
);

export default store;
