import React, { Component } from "react";
import { Link } from "react-router-dom";

let navigationIn = <div />;

// I got the navbar code from Bootstrap documentation
export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  autoCheckIfUserIn = () => {
    console.log("email is" + this.props.redirectToReferrer);
    if (this.props.redirectToReferrer === false) {
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
              {this.props.redirectToReferrer} You're logged in: [accountname]
            </Link>
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
