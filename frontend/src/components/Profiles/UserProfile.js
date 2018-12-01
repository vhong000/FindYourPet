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
          <div className="col text-center p-3">
            <h2>
              {data.firstName} {data.lastName}'s Profile
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src={photoDefault} alt="User profile" />
            <h3>About me</h3>
            <p>
              <strong>First name</strong>: {data.firstName}
            </p>
            <p>
              <strong>Last name</strong>: {data.lastName}
            </p>
            <p>
              <strong>Address</strong>: {data.address}
            </p>
            <p>
              <strong>City</strong>: {data.city}
            </p>
            <p>
              <strong>State</strong>: {data.state}
            </p>
            <p>
              <strong>Zipcode</strong>: {data.zipcode}
            </p>
            <p>
              <strong>PhoneNumber</strong>: {data.phoneNumber}
            </p>
            <p>
              <strong>Email</strong>: {data.email}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              <strong>Pets I'm Interested in</strong>:{" "}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              <strong>People interested in my pet</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
