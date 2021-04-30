import { createStore, combineReducers, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";

import profileReducer from "./profileReducer";
import searchReducer from "./searchReducer";

const store = createStore(
  combineReducers({
    profile: profileReducer,
    search: searchReducer,
  }),
  applyMiddleware(ReduxThunk)
);

export default store;
