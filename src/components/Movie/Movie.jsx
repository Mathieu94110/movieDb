import React from "react";
import styles from "./Movie.module.css";
export default function Movie(props) {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image">
          {props.image == null ? (
            <img
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt="card image"
              className={styles.homeCardImage}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${props.image}`}
              alt="card image"
              className={styles.homeCardImage}
            />
          )}

          <a class="btn-floating halfway-fab waves-effect waves-light red">
            <i
              class="material-icons"
              onClick={() => props.viewMovieInfo(props.movieId)}
            >
              add
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}
//ligne 27 peut etre le pb
