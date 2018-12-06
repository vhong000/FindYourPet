import React, { Component } from 'react'
import ZipperSetter from '../MainDashboard/ZipcodeSetter/ZipcodeSetter';

import SearchingCriterias from '../MainDashboard/SearchingCriterias/SearchingCriterias';
import LikedPets from '../MainDashboard/LikedPets/LikedPets';
import PetCard from './PetCard';

export default class PetProfile extends React.Component{
    constructor(props){
    super(props)
    this.state = {
      pet: {}
    };
  }

  componentDidMount(){
    console.log(this.props.match.params.id)
    
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
  
}

  

  render(){
    return (
      <div>
        <div>      
          <div className="container">              
              <div className="row">         
                  <div className="col-md-9">   
                    {this.state.pet.name}                                                                                     
                  </div>            
                  <div className="col-md-3">                             
                  </div>              
              </div>    
          </div>     
        </div>        
      </div>
    )
  }
}
