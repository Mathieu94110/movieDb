import React from "react";

export default function Movie(props) {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {props.image == null ? (
            <img
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt="card image"
              style={{ wifth: "100%", height: 360 }}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${props.image}`}
              alt="card image"
              style={{ wifth: "100%", height: 250 }}
            />
          )}
          <span class="card-title">{props.title}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red">
            <i class="material-icons">add</i>
          </a>

          <div class="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
