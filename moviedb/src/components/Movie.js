import React from "react";

const imgAPI = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title, poster_path, overview, vote_average}) => (
    <div className="movie">
        <img src={imgAPI + poster_path} alt={title}/>
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
    </div>
);
  

export default Movie;