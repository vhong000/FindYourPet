import React from "react";
import { Redirect } from "react-router-dom";
import isEmpty from 'lodash/isEmpty';
import data from "../../auth";
import photoDefault from "../../Images/paw.png";
import { getUserPets, getInterestedPets } from '../../fetches';
import PetCard from '../PetProfile/PetCard';

export default class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userPets: [],
			userInterestedPets: [],
		}
	}

	componentDidMount() {
		getUserPets().then(response => { 
			this.setState({ userPets: response }) 
		});
		getInterestedPets().then(response => {
			this.setState({ userInterestedPets: response })
		});
	}

  render() {
		const { userPets, userInterestedPets } = this.state;

    if (this.props.auth === false) {
      return <Redirect to={"/"} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center p-3">
            <h2>
              {data.firstName} {data.lastName}'s Profile
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src={photoDefault} alt="User profile" />
            <h3>About me</h3>
            <p>
              <strong>First name</strong>: {data.firstName}
            </p>
            <p>
              <strong>Last name</strong>: {data.lastName}
            </p>
            <p>
              <strong>Address</strong>: {data.address}
            </p>
            <p>
              <strong>City</strong>: {data.city}
            </p>
            <p>
              <strong>State</strong>: {data.state}
            </p>
            <p>
              <strong>Zipcode</strong>: {data.zipcode}
            </p>
            <p>
              <strong>PhoneNumber</strong>: {data.phoneNumber}
            </p>
            <p>
              <strong>Email</strong>: {data.email}
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <p>
              <strong>My Pets</strong>
							{ !isEmpty(userPets) ? (
								userPets.map(pet => {
									return (
										<PetCard 
											name={pet.name}
											species={pet.species}
											breed={pet.breed}
											dob={pet.dob}
											gender={pet.gender}
											description={pet.description}
										/>
									)
								})
							) : ( <p>No Pets</p> ) }
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              <strong>Pets I'm Interested in</strong>:{" "}
							{ !isEmpty(userInterestedPets) ? (
								userInterestedPets.map(pet => {
									return (
										<PetCard 
                      id={pet.id}
											name={pet.name}
											species={pet.species}
											breed={pet.breed}
											dob={pet.dob}
											gender={pet.gender}
											description={pet.description}
										/>
									)
								})
							) : ( <p>No Interested Pets</p> ) }
            </p>
          </div>
        </div>

      </div>
    );
  }
}
