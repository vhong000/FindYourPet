import React, { Component } from 'react'
import PetCard from './PetCard';
import "./PetCard.css";
import cardphoto from "../../Images/paw.png";

export default class PetProfile extends React.Component{
    constructor(props){
    super(props)
    this.state = {
      pet: {},
      owner: {}
    };
    this.setInterested = this.setInterested.bind(this);
  }

  componentDidMount(){
    console.log(this.props)
    //Getting the Pet's info
    fetch(`/api/pet/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log("Something went wrong");
        }
      })
      .then(jsonData => {
        console.log(jsonData);
        this.setState({ pet: jsonData });
      })
      .catch(error => {
        console.log(error);
      });

      //Getting the pet's owner
    fetch(`/api/pet/owner/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response.status)
          console.log(response.json())
          return response.json();
        } else {
          console.log("Something went wrong");
        }
      })
      .then(jsonData => {
        console.log(jsonData);
        this.setState({ owner: jsonData });
      })
      .catch(error => {
        console.log(error);
      });
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
          console.log("requested interest")
        } else {
          console.log("Something went wrong");
        }
      });
  }

  

  render(){
    return (
      <div>
        <div>      
          <div className="container mt-5 mb-5">              
              <div className="row">         
                  <div className="col-md-7"> 
                    <div className="card border-dark">
                      <img className="card-img-top" src={cardphoto} alt="Pet Image"/>
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
                  <div className="col-md-3">      
                    <div className="card border-dark bg-warning mb-3 ml-5">
                      <div className="card-header bg-dark text-white">Contact</div>
                      <div className="card-body">
                        <h5 className="card-title">{this.state.pet.name}'s Zipcode is: {this.state.pet.zipcode}</h5>
                        <p className="card-text">
                          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" onClick={this.setInterested}autoComplete="off">
                            "I'm interested!"
                          </button>
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
