import React from "react";

export default function SelectedMovie(props) {
  return (
    <div>
      <div className="container">
        <div
          className="row"
          onClick={props.closeMovieInfo}
          style={{ cursor: "pointer", paddingTop: 50 }}
        >
          <span style={{ color: "#fff" }}>
            <i className="fas fa-arrow-left">
              <span style={{ marginLeft: 10 }}>Revenir en arrière</span>
            </i>
          </span>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <img
              className=""
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt="Card image cap"
              style={{ width: "100%", height: 360 }}
            />
          </div>
          <div className="col s12 m8">
            <div className="info-container">
              <p>title : aaadfcsdvsd</p>
              <p>release_date : 05/05/2020</p>
              <p>
                overview : Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
