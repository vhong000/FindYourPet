import React, { Component } from "react";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
import logo from '../../../Images/postpet.png';

export default class MainNavigation extends Component {
  render() {
    return (
      <div className="container mainNavigation">
      
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <h4 className="text-uppercase m-0">FIND CATS</h4>
                <Link className="nav-item nav-link active" to="/FindPetPage">
                <img
                  className="img-fluid mb-5 d-block mx-auto img-size"
                  src="https://www.designfreelogoonline.com/wp-content/uploads/2015/05/00496-cat-logo-design-free-logomaker-01.png"
                  alt="Cat image"
                />
                <span className="sr-only">(current)</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <h4 className="text-uppercase m-0">FIND DOGS</h4>
                <Link className="nav-item nav-link active" to="/FindPetPage">
                <img
                  className="img-fluid mb-5 d-block mx-auto  img-size"
                  src="https://cottonwoodpetresort.com/Images/Main/the-dog-bus-logo-right.png"
                  alt="Dog image"
                />       
                <span className="sr-only">(current)</span>
                </Link>
                
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <h4 className="text-uppercase m-0">POST PET</h4>
                <Link className="nav-item nav-link active" to="/PostPet">
                <img
                  className="img-fluid mb-5 d-block mx-auto img-size my-auto"
                  id="postpet"
                  src={logo} 
                  alt="Find me image"
                />
                <span className="sr-only">(current)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
