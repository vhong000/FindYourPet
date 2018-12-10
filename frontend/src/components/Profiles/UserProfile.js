import React from "react";
import { Redirect } from "react-router-dom";
import isEmpty from 'lodash/isEmpty';
import data from "../../auth";
import UpdateDelete from "./Common/UpdateDelete/UpdateDelete";
import PetImages from "./AdopteeProfile/PetImages";
import Settings from "./Settings/Settings";
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
        <div class="container">
        <br/>
        <h2>{data.firstName} {data.lastName}'s Profile</h2>
            <div class="row">
                <div class="col-md-3 ">
                    <Settings/>
                </div>
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-body">              
                            <div class="row">
                                <div class="col-md-12">                                                       
                                                                 
                                    <div className="row">
                                      <div className="col">                                    
                                        <h3>About me</h3>
                                        <p>First name: {data.firstName}</p>
                                        <p>Last name: {data.lastName}</p>
                                        <p>Address: {data.address}</p>
                                        <p>City: {data.city}</p>
                                        <p>State: {data.state}</p>
                                        <p>Zipcode: {data.zipcode}</p>
                                        <p>PhoneNumber: {data.phoneNumber}</p>
                                        <p>Email: {data.email}</p>
                                        <p>My pets:</p>
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
                                        <p>Pets I'm Interested in:{" "}</p>
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
                                       
                                      </div>
                                    </div>                                    
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
            </div>
        </div>        
      </div>
    );
  }
}
