import React, { Component } from "react";
import "./interested.css";

export default class Interested extends Component {
  render() {
    return (
      <div className="card" id="likecard">
        <div className="card-body">
          <b>
            <p className="card-title">Pet Name</p>
          </b>
          <p id="info">Pet Type</p>
          <p className="card-text" id="infosmall">
            Description Description Description Description
          </p>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option2"
                autoComplete="off"
              />
              Show
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autoComplete="off"
              />
              Contact
            </label>
          </div>
        </div>
      </div>
    );
  }
}
