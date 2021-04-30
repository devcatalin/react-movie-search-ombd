import { createStore } from "redux";

const initialState = {
  movies: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
  }
}

const store = createStore(reducer);

export default store;
