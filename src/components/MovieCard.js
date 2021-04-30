import React from "react";

import "./MovieCard.css";

import { useDispatch } from "react-redux";
import { insertFavoriteMovie, removeFavoriteMovie } from "../store/profileActions";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Card } from "antd";

function MovieCard({ movie, isFavorite }) {
  const dispatch = useDispatch();

  const onClickHeartIcon = () => {
    if (isFavorite) {
      dispatch(removeFavoriteMovie(movie.imdbID));
    } else {
      dispatch(insertFavoriteMovie(movie));
    }
  };

  return (
    <Card>
      <p>{movie.Title}</p>
      <span className="HeartIcon" onClick={onClickHeartIcon}>
        {isFavorite ? <HeartFilled /> : <HeartOutlined />}
      </span>
    </Card>
  );
}

export default MovieCard;
