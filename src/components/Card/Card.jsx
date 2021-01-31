import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 backgroundWhite test">
          <div className="card">
            <img
              src={props.image}
              className="card-img-top imageCard"
              alt={props.title}
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <a className="card-link" href={props.Website}>
                Website Link
              </a>
              <br />
              <a className="card-link" href={props.GitHub}>
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
