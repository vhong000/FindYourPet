import React, { Component } from 'react';
import './UserCard.css';
import cardphoto from '../../../Images/paw.png';

export default class UserCard extends Component {
  render() {
    return (      
        <div className="col-md-4 mb-3 mb-md-0"  id="usercard">
            <div className="card py-4 h-100">
                <div className="card-body text-center">                                                                    
                    <h4 className="text-uppercase m-0">Usercard</h4>
                    <hr className="my-4" />                     
                    <img className="img-fluid mb-5 d-block mx-auto" src={cardphoto} alt="usercard"/>             
                    <div className="small text-black-50"> pet description pet descriptionpet descriptionpet 
                    descriptionpet descriptionpet description</div>
                </div>
            </div>
        </div>      
    )
  }
}
