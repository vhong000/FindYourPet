import React, { Component } from 'react';
import {Link} from "react-router-dom";

// I got the navbar code from Bootstrap documentation
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to='/'>FindYourPet</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to='/FindPetPage'>Find a Pet <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link active" to='/AdopterProfile'>Adopter Profile</Link>
              <Link className="nav-item nav-link active" to='/AdopteeProfile'>Adoptee Profile</Link>
              <Link className="nav-item nav-link active" to='/LoginPage'>Sign In</Link>
            </div>  
          </div>
        </nav>
      </div>
      )
    }

}