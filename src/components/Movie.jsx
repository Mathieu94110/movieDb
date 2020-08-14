import React from "react";

export default function Movie(props) {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image">
          {props.image == null ? (
            <img
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt="card image"
              style={{ width: "100%", height: "300px" }}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${props.image}`}
              alt="card image"
              style={{ width: "100%", height: "300px" }}
            />
          )}

          <a class="btn-floating halfway-fab waves-effect waves-light red">
            <i class="material-icons">add</i>
          </a>

          <div class="card-content">
            <p>
              <a href="#">Voir les details</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
