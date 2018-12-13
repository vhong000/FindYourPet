import React, { Component } from "react";
import "./interested.css";
import PetCard from "../../../PetProfile/PetCard";

import { Link } from "react-router-dom";

export default class Interested extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card" id="likecard">
        <div className="card-body">
          <b>
            <Link className="link" to={`/pet/${this.props.id}`}>
              <p className="card-title">{this.props.name}</p>
            </Link>
          </b>
          <p id="info">
            {this.props.species} | {this.props.breed}
          </p>
          <p className="card-text" id="infosmall">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}
