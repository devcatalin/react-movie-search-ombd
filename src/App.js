import "./App.css";
import { Button } from "antd";

import { useSelector, useDispatch } from "react-redux";

import { fetchMovies } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => {
    console.log({ state });
    return state.movies;
  });

  return (
    <div className="App">
      {movies.map((movie) => (
        <p>{movie}</p>
      ))}
      <Button onClick={() => dispatch(fetchMovies())} type="primary">
        Test button
      </Button>
    </div>
  );
}

export default App;
