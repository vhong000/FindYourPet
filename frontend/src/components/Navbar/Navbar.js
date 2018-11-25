import React, { Component } from "react";
import { Link } from "react-router-dom";

// I got the navbar code from Bootstrap documentation
export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            findyourpet
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-item nav-link active" to="/FindPetPage">
                  Find a Pet <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link active" to="/PostPet">
                  Post a Pet <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link active" to="/AdopterProfile">
                  Adopter Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link active" to="/AdopteeProfile">
                  Adoptee Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link active" to="/LoginPage">
                  Sign In | Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
