import React from "react";

import "./MovieCard.css";

import { useDispatch } from "react-redux";
import { insertFavoriteMovie, removeFavoriteMovie } from "../store/profileActions";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Card, Tooltip } from "antd";

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
    <Card cover={<img alt={movie.Title} src={movie.Poster} />}>
      <p>{movie.Title}</p>
      <p>
        Release year: <span style={{ fontWeight: 500 }}>{movie.Year}</span>
      </p>
      <span className="HeartIcon" onClick={onClickHeartIcon}>
        {isFavorite ? (
          <Tooltip title="Remove from favorites">
            <HeartFilled style={{ fontSize: 24 }} />
          </Tooltip>
        ) : (
          <Tooltip title="Add to favorites">
            <HeartOutlined style={{ fontSize: 24 }} />
          </Tooltip>
        )}
      </span>
    </Card>
  );
}

export default MovieCard;
