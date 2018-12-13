import React from "react";
import { Redirect } from "react-router-dom";
import isEmpty from 'lodash/isEmpty';
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
	}

	componentDidMount() {
		getUserPets().then(response => { 
			this.setState({ userPets: response }) 
		})
		getInterestedPets().then(response => {
			this.setState({ userInterestedPets: response })
		});
	}

	checkInterest(event){
		getInterestedUsers(event.target.value).then(response =>{
			if(response.length !== 0 ){
				var temp = response
				console.log(temp)
				this.setState({ interestedUsers:  temp })
			}else{
				console.log("No one is interested")
			}
		})
	}

	//I guess here I would iterate through interestedUsers and display all of them 
	showInterested(){
		if(this.state.interestedUsers.length === 0){
			return <div> No one is interested </div>
		}
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
				<strong>My Pets</strong>
				<div className="row">
					<div className="col-md-9">
						<div className="card my-4">
							<div className="container">
								<div className="row">
									{ !isEmpty(userPets) ? (
										userPets.map(pet => {
											return (
												<div>
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
												<button type="button" className="btn btn-primary" value={pet.id} onClick={this.checkInterest}>
                              						"Check interest"
                            					</button>
                            					</div>
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


		</div>
    );
  }
}
