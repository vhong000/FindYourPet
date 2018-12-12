import React, { Component } from "react";
import "./LikedPets.css";
import Interested from "./InterestedForm/Interested";
import { getInterestedPets } from "../../../fetches";

import isEmpty from "lodash/isEmpty";

export default class LikedPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInterestedPets: []
    };
  }

  componentDidMount() {
    getInterestedPets().then(response => {
      this.setState({ userInterestedPets: response });
    });
  }

  render() {
    const { userInterestedPets } = this.state;
    return (
      <div>
        <div className="card my-4" id="boxstyle">
          <h5 className="card-header" id="maincolor">
            Liked Pets
          </h5>
          <div className="card-body">
            {!isEmpty(userInterestedPets) ? (
              userInterestedPets.map(pet => {
                return (
                  <Interested
                    id={pet.id}
                    name={pet.name}
                    species={pet.species}
                    breed={pet.breed}
                    dob={pet.dob}
                    gender={pet.gender}
                    description={pet.description}
                  />
                );
              })
            ) : (
              <p>No Interested Pets</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
