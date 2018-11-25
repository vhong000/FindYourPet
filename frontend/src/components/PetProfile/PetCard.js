import React, { Component } from 'react';
import logo from '../../Images/profiledog.svg';
import './PetCard.css';

export default class PetCard extends Component {
  render() {
    return (  
    <div>
        <div className="card my-4 text-center">
            <h5 className="card-header">Pet Information</h5>
            <div className="card-body">            
            <button type="button" class="btn btn-dark" id="exit">X</button>
            <div className="card-body" id ="cardbody"> 
            <h6>Pet Type: cat/dog</h6>            
                <img class="img-thumbnail" id="petpicture" src={logo}  alt="logo" />
                    <div className="card">               
                        <div className="card-body">
                            <h5 className="card-title">Pet name • Age • Bread • Location </h5>                                              
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Medical info</li>
                            <li className="list-group-item">Personality</li>
                            <li className="list-group-item">etc</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>                    
                        </div>                
                    </div> 
                    <br/>    
                  <button name="submit" type="submit" className="btn btn-primary" id="update">Contact the Owner</button>
              </div>
            </div>
        </div>        
    </div>      
    )
  }
}
