import React, { Component } from "react";
import "./MainNavigation.css";
import cat from '../../../Images/findcat.jpg';
import dog from '../../../Images/finddog.jpg';
import pets from '../../../Images/pets.jpg';

export default class MainNavigation extends Component {
  render() {
    return (
     <div>
       <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">              
              <div className="container">
                  <h4 className="text-uppercase m-0 text-center">FIND DOGS</h4> 
                  <img className="img-fluid mb-5 d-block mx-auto" src={dog} alt="DOG image"/>                       
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">              
              <div className="container">
                  <h4 className="text-uppercase m-0 text-center">FIND CATS</h4> 
                  <img className="img-fluid mb-5 d-block mx-auto" src={cat} alt="DOG image"/>                       
              </div>
            </div>
          </div>         
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">              
              <div className="container">
                  <h4 className="text-uppercase m-0 text-center">OTHER PETS</h4> 
                  <img className="img-fluid mb-5 d-block mx-auto" src={pets} alt="DOG image"/>                       
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
