import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../Images/dog-logo.png';
import sendData from "../../auth";

let navigationIn = <div />;

// I got the navbar code from Bootstrap documentation
export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  logMeOut = () => {
    sendData.logOut(this.props.logout, this.props.history);
  };

  //check if user in.
  //if user is in, shows full navigation bar.
  //if not, only shows findpet and sign in
  autoCheckIfUserIn = () => {
    if (this.props.auth === false) {
      navigationIn = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-item nav-link active" to="/FindPetPage">
              Find a Pet <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item nav-link active" to="/LoginPage">
              Sign In | Register
            </Link>
          </li>
        </ul>
      );
    } else {
      navigationIn = (
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
          <li className="nav-item dropdown">
            <div
              className="nav-link nav-item dropdown-toggle active"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              User
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/ViewProfile">
                View profile (placeholder)
              </Link>
              <Link className="dropdown-item" to="/Settings">
                Settings (placeholder)
              </Link>
              <div className="dropdown-divider" />
              <button className="dropdown-item" onClick={this.logMeOut}>
                Logout
              </button>
            </div>
          </li>
        </ul>
      );
    }
  };

  render() {
    this.autoCheckIfUserIn();
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
          <div id="heart"> <div class="lds-heart"><div></div></div></div>         
          <img id="logo"          
          src={logo}
          alt="logo"
          />
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
            {navigationIn}
          </div>
        </div>
      </nav>
    );
  }
}
