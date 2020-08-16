import React from "react";
import Movie from "../Movie/Movie";
const MovieList = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {props.movies.map((movie, index) => {
            return (
              <Movie
                key={index}
                image={movie.poster_path}
                title={movie.title}
                viewMovieInfo={props.viewMovieInfo}
                overview={movie.overview}
                movieId={movie.id}
                date={movie.release_date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
