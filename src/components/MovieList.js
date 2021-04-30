import React from "react";

import { useSelector } from "react-redux";

import { Row, Col } from "antd";

import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  const favoritesById = useSelector((store) => store.profile.favoritesById);

  const isFavorite = (movieId) => favoritesById[movieId] != null;

  return (
    <Row gutter={24}>
      {movies.map((result, index) => (
        <Col style={{ marginBottom: 24 }} key={index} xs={12} md={6} lg={4}>
          <MovieCard movie={result} isFavorite={isFavorite(result.imdbID)} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
