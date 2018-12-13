import React, { Component } from 'react'
import PetCard from './PetCard';
import "./PetCard.css";
import cardphoto from "../../Images/paw.png";

export default class PetProfile extends React.Component{
    constructor(props){
    super(props)
    this.state = {
      pet: {},
      owner: {},
      interest: false 
    };
    this.setInterested = this.setInterested.bind(this);
    this.showInterestComp = this.showInterestComp.bind(this);
    //this.getPetOwner = this.getPetOwner.bind(this);
  }

  componentDidMount(){
    //Have to use promise.all to make multiple fetches
    Promise.all([
            fetch(`/api/pet/${this.props.match.params.id}`),
            fetch(`/api/pet/owner/${this.props.match.params.id}`)
        ])
        .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]) )
        .then(([jsonData1, jsonData2]) => this.setState({
            pet: jsonData1, 
            owner: jsonData2
        }));

    // //Getting the pet's owner
    // fetch(`/api/pet/owner/${this.props.match.params.id}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8"
    //   }
    // })
    //   .then(response => {
    //     if (response.status === 200) {
    //       console.log(response.status)
    //       console.log(response.json())
    //       return response.json();
    //     } else {
    //       console.log("Something went wrong");
    //     }
    //   })
    //   .then(jsonData => {
    //     console.log(jsonData);
    //     this.setState({ owner: jsonData });
    //     console.log(this.state.owner + " hello")
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
   

    //Getting the Pet's info
    // fetch(`/api/pet/${this.props.match.params.id}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8"
    //   }
    // })
    //   .then(response => {
    //     if (response.status === 200) {
    //       return response.json();
    //     } else {
    //       console.log("Something went wrong");
    //     }
    //   })
    //   .then(jsonData => {
    //     this.setState({ pet: jsonData });
    //   })
    //   .then(() => {
    //     this.getPetOwner();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
  

  setInterested(){
    fetch("/api/user/interested/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        petId: this.props.match.params.id
      })
    })
      .then(response => {
        if (response.status === 200) {
          this.setState({interest: true})
          console.log("requested interest " + this.setState.interest)
        } else {
          console.log(response.status)
          console.log("Something went wrong");
        }
      });
  }

  showInterestComp(){
    if(this.state.interest === false){
        return <div></div>
    }
    else if(this.state.interest === true){
        return <div> {this.state.owner.firstName} has received your interest! </div>
    }
  }

  render(){
    return (
      <div>
        <div>      
        <h1 className="mt-2"> Learn more about {this.state.pet.name} </h1>  
          <div className="container mt-5 mb-5">            
              <div className="row">         
                  <div className="col-md-7"> 
                    <div className="card border-dark">
											{ this.state.pet.imageUrl ? (
												<img className="card-img-top" src={this.state.pet.imageUrl} alt="Pet Image"/>
											) : ( 
												<img className="card-img-top" src={cardphoto} alt="Pet Image"/>
											)}
                      <div className="card-body">
                        <h5 className="card-title">{this.state.pet.name}</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Breed: {this.state.pet.breed}</li>
                        <li className="list-group-item">Gender: {this.state.pet.gender}</li>
                        <li className="list-group-item">Age: {this.state.pet.dob}</li>
                        <li className="list-group-item">{this.state.pet.name}'s description: {this.state.pet.description}</li>
                      </ul>
                    </div>                                                                                    
                  </div>            
                  <div className="col-md-4">      
                    <div className="card border-dark bg-warning mb-3 ml-5">
                      <div className="card-header bg-dark text-white centerElement">Contact</div>
                      <div className="card-body">
                        <h5 className="card-title">{this.state.pet.name}'s owner: </h5>
                        <p className="card-text">
                          Name: {this.state.owner.firstName} {this.state.owner.lastName} <br></br>
                          email: {this.state.owner.email} <br></br>
                          zipcode: {this.state.owner.zipcode} <br></br>
                          <br></br>
                          <div className="text-center">
                            <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" onClick={this.setInterested}autoComplete="off">
                              "I'm interested!"
                            </button>
                            {this.showInterestComp()}
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>              
              </div>    
          </div>     
        </div>        
      </div>
    )
  }
}
