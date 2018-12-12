import React, { Component } from "react";
import "./interested.css";
import PetCard from "../../../PetProfile/PetCard";

export default class Interested extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card" id="likecard">
        <div className="card-body">
          <b>
            <p className="card-title">{this.props.name}</p>
          </b>
          <p id="info">
            {this.props.species} | {this.props.breed}
          </p>
          <p className="card-text" id="infosmall">
            {this.props.description}
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
