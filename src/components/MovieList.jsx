import React from "react";
import Movie from "./Movie";
export default function MovieList(props) {
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
                overview={movie.overview}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
