import React from "react";
import { Redirect } from "react-router-dom";
import data from "../../auth";
import photoDefault from "../../Images/paw.png";

export default class UserProfile extends React.Component {
  render() {
    if (this.props.auth === false) {
      return <Redirect to={"/"} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>User Profile</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={photoDefault} alt="User profile" />
            <h3>About me</h3>
            <p>First name: {data.firstName}</p>
            <p>Last name: {data.lastName}</p>
            <p>Address: {data.address}</p>
            <p>PhoneNumber: {data.phoneNumber}</p>
            <p>Email: {data.email}</p>
            <p>Pets I'm Interested in: </p>
            <p>People interested in my pet</p>
          </div>
        </div>
      </div>
    );
  }
}
