import React, { Component } from "react";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
import dog from '../../../Images/find-dog.png';
import cat from '../../../Images/find-cat.png';
import post from '../../../Images/post-pet.png';

export default class MainNavigation extends Component {
  render() {
    return (
      <div className="grid-container">
          <div className="item1">
            <div className="card-body text-center">
              <h4 className="text-uppercase m-0">FIND CATS</h4>
              <Link className="nav-item nav-link active" to="/FindPetPage">
              <img 
                className="img-fluid mb-5 d-block mx-auto"
                id="pic"
                src={cat}
                alt="Cat image"
              />
              <span className="sr-only">(current)</span>
              </Link>
            </div>
          </div>
          <div className="item2">
            <div className="card-body text-center">
              <h4 className="text-uppercase m-0">FIND DOGS</h4>
              <Link className="nav-item nav-link active" to="/FindPetPage">
              <img 
                className="img-fluid mb-5 d-block mx-auto"
                id="pic"
                src={dog}
                alt="Dog image"
              />       
              <span className="sr-only">(current)</span>
              </Link>                
            </div>        
          </div>       
          <div className="item3">
            <div className="card-body text-center" id="dist">
            <h4 className="text-uppercase m-0">POST PET</h4>
            <Link className="nav-item nav-link active" to="/PostPet">
            <img
              className="img-fluid mb-5 d-block mx-auto img-size my-auto"
              id="pic"
              src={post} 
              alt="Find me image"
            />
            <span className="sr-only">(current)</span>
            </Link>
            </div>        
          </div> 
      </div>
    );
  }
}
