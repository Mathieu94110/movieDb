import React from "react";
import styles from "./SelectedMovie.module.css";
const SelectedMovie = (props) => {
  return (
    <div className={styles.SelectedMoviePage}>
      <div className="row" onClick={props.goToMenu} className={styles.goback}>
        <span className={styles.cursor}>
          <i className="fas fa-arrow-left">
            <span>Revenir en arrière</span>
          </i>
        </span>
      </div>
      <div className="row">
        <div className="col s12 m4">
          {props.currentMovie.poster_path == null ? (
            <img
              className={styles.imageSize}
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt="Card image cap"
            />
          ) : (
            <img
              className={styles.imageSize}
              src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
              alt="Card image"
            />
          )}
        </div>
        <div className="col s12 m8">
          <div className="info-container">
            <p className={styles.cardContent}>
              <span className={styles.cardTitle}>Titre :</span>
              <span>{props.currentMovie.title}</span>
            </p>
            <p className={styles.cardContent}>
              <span className={styles.cardTitle}>Date de réalisation :</span>
              <span>
                {props.currentMovie.release_date

                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </span>
            </p>

            <p className={styles.cardContent}>
              <span className={styles.cardTitle}>Nombre de votes :</span>
              <span>{props.currentMovie.vote_count}</span>
            </p>
            <p className={styles.cardContent}>
              <span className={styles.cardTitle}>Moyenne des votes :</span>
              <span>{props.currentMovie.vote_average}</span>
            </p>
            <p className={styles.synopsisContent}>
              <span className={styles.synospsisTitle}>Synospsis :</span>

              <span> {props.currentMovie.overview}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectedMovie;
