import React from "react";
import { Redirect } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import data from "../../auth";
import photoDefault from "../../Images/paw.png";
import { getUserPets, getInterestedPets, getInterestedUsers } from '../../fetches';
import PetCard from '../PetProfile/PetCard';

export default class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userPets: [],
			userInterestedPets: [],
      		interestedUsers: []
		}
		this.checkInterest = this.checkInterest.bind(this)
		this.displayUsers = this.displayUsers.bind(this)
	}

	componentDidMount() {
		getUserPets().then(response => { 
			this.setState({ userPets: response }) 
		});
		getInterestedPets().then(response => {
			this.setState({ userInterestedPets: response })
		});
	}

	checkInterest(){
		this.state.userPets.forEach(pet =>{
			getInterestedUsers(pet.id).then(response =>{
			if(response.length !== 0 ){
				// response.forEach(user => {
				// 	this.setState({ interestedUsers: [...this.state.interestedUsers,  user] })
				// })
				this.setState({ interestedUsers: [...this.state.interestedUsers,  response] })
			}else{
				//console.log("No one is interested")
			}
		 })
		})
	}

	displayUsers(user, petId){
		for(var i = 0; i < this.state.userPets.length; i++){
			if( this.state.userPets[i].id == petId){
				return <div className="card border-dark mb-3 ml-5">
					<div className="card-header bg-dark text-white">! Someone is interested in your pet !</div>
					<div className="card-body">
					{user.firstName} {user.lastName} is interested in {this.state.userPets[i].name}.<br></br>
					Their email is {user.email}. 
					</div>
					</div>
			}
		}
	}

	render() {
    // 
	const { userPets, userInterestedPets, interestedUsers } = this.state;

    if (this.props.auth === false) {
      return <Redirect to={"/"} />;
    }
    return (
      <div className="container" id="space">
        <div class="row">
          <div class="col-md-3 ">
            <div class="list-group ">
              <a href="#" class="list-group-item list-group-item-action" id="side" >
                <p>{data.firstName} {data.lastName} <b>'s Profile</b> </p>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <img src={photoDefault} alt="User profile" id="imageprof"/>
              </a>
            </div>
          </div>
          <div class="col-md-9">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <h3>About me</h3>
                    <hr />
                  </div>
                </div>

                <div class="row text-left">
                  <div class="col-md-12">
                    <div>
                      <div class="form-group row">
                        <label for="username" class="col-4 col-form-label">
                          <b>First name: </b>
                        </label>
                        <div class="col-8"><span id="data">{data.firstName}</span></div>
                      </div>
                      <div class="form-group row">
                        <label for="username" class="col-4 col-form-label">
                          <b>Last name: </b>
                        </label>
                        <div class="col-8"><span id="data">{data.lastName}</span></div>
                      </div>
                      <div class="form-group row">
                        <label for="username" class="col-4 col-form-label">
                          <b>Address: </b>
                        </label>
                        <div class="col-8"><span id="data">{data.address}</span></div>
                      </div>
                      <div class="form-group row">
                        <label for="username" class="col-4 col-form-label">
                          <b>City: </b>
                        </label>
                        <div class="col-8"><span id="data">{data.city}</span></div>
                      </div>
                      <div class="form-group row">
                        <label for="username" class="col-4 col-form-label">
                          <b>State:</b>{" "}
                        </label>
                        <div class="col-8"><span id="data">{data.state}</span></div>
                      </div>
                      <div class="form-group row">
                        <label for="username" class="col-4 col-form-label">
                          <b>Zipcode:</b>{" "}
                        </label>
                        <div class="col-8"><span id="data">{data.zipcode}</span></div>
                      </div>
                      <div class="form-group row">
                        <label for="username" class="col-4 col-form-label">
                          <b>PhoneNumber:</b>{" "}
                        </label>
                        <div class="col-8"><span id="data">{data.phoneNumber}</span></div>
                      </div>
                      <div class="form-group row">
                        <label for="username" class="col-4 col-form-label">
                          <b>Email:</b>
                        </label>
                        <div class="col-8"><span id="data">{data.email}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <h3>My Pets</h3>
                    <hr />
                    <div className="row">
                      <div className="col-md-9">
                        <div className="card my-4">
                          <div className="container">
                            <div className="row">
                              {!isEmpty(userPets) ? (
                                userPets.map(pet => {
                                  return (
                                    <PetCard
                                      id={pet.id}
                                      imageUrl={pet.imageUrl}
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
                                <p>No Pets</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>Pets I'm Interested in</h3>
                <hr />

                <div className="row">
                  <div className="col-md-9">
                    <div className="card my-4">
                      <div className="container">
                        <div className="row">
                          {!isEmpty(userInterestedPets) ? (
                            userInterestedPets.map(pet => {
                              return (
                                <PetCard
                                  id={pet.id}
                                  imageUrl={pet.imageUrl}
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
                  </div>
                </div>
                <h3> Users interested in your pets </h3>
				<div className="row">
					<div className="text-center">
						<button type="button" className="btn btn-primary" onClick={this.checkInterest}>
							"Check Interest"
						</button>
						{ !isEmpty(interestedUsers) ? (
									interestedUsers.map(element => {
										return element.map(user => {
												return (
													<div>
														{ this.displayUsers(user,user.interested_pets.petId) }
													</div>
												)}
											)
										
									})
								) : ( <p>No one is interested in your pets</p> ) }

					</div>
				</div>

              </div>
            </div>
          </div>
        </div>
        {/*
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
				<strong>My Pets</strong>
				<div className="row">
					<div className="col-md-9">
						<div className="card my-4">
							<div className="container">
								<div className="row">
									{ !isEmpty(userPets) ? (
										userPets.map(pet => {
											return (
												<PetCard 
													id = {pet.id}
													imageUrl={pet.imageUrl}
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
								</div>
							</div>
						</div>
					</div>
        </div>

			<strong>Pets I'm Interested in</strong>
			<div className="row">
				<div className="col-md-9">
					<div className="card my-4">
						<div className="container">
							<div className="row">
								{ !isEmpty(userInterestedPets) ? (
									userInterestedPets.map(pet => {
										return (
											<PetCard 
												imageUrl={pet.imageUrl}
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
			*/}

		</div>
    );
  }
}
