import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 backgroundWhite">
          <div className="card">
            <img
              src={props.image}
              className="card-img-top imageCard"
              alt={props.title}
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
