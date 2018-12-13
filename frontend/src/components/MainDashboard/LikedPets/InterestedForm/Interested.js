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
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary" id="option2">
              <input type="radio" name="options" autocomplete="off" />
              Interested
            </label>
          </div>
        </div>
      </div>
    );
  }
}
