import React, { Component } from "react";
import sendData from "../../auth";
import "./Login.css";

export default class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    password: "",
    city: "",
    state: "",
    zipcode: ""
  };

  submit = () => {
    sendData.sendRegister(
      this.state.firstName,
      this.state.lastName,
      this.state.address,
      this.state.city,
      this.state.state,
      this.state.zipcode,
      this.state.phoneNumber,
      this.state.email,
      this.state.password,
      this.props.history
    );
  };

  handleFNChange = event => {
    this.setState({ firstName: event.target.value });
  };

  handleLNChange = event => {
    this.setState({ lastName: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleAddressChange = event => {
    this.setState({ address: event.target.value });
  };

  handlePNumberChange = event => {
    this.setState({ phoneNumber: event.target.value });
  };

  handlePassChange = event => {
    this.setState({ password: event.target.value });
  };

  handleCityChange = event => {
    this.setState({ city: event.target.value });
  };

  handleStateChange = event => {
    this.setState({ state: event.target.value });
  };

  handleZipcodeChange = event => {
    this.setState({ zipcode: event.target.value });
  };

  render() {
    return (
      <div className="panel">
        <h2 className="text-focus-in">Register</h2>
        <br />
        <form id="loginform" className="text-right">
          <div className="form-group row">
            <label for="name" className="col-sm-3 col-form-label">
              First Name:
            </label>
            <div className="col-sm-9">
              <input
                id="name"
                name="name"
                placeholder="First Name"
                className="form-control here"
                type="text"
                onChange={this.handleFNChange}
                value={this.state.firstName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="lastname" className="col-sm-3 col-form-label">
              Last Name:
            </label>
            <div className="col-sm-9">
              <input
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                className="form-control here"
                type="text"
                onChange={this.handleLNChange}
                value={this.state.lastName}
              />
            </div>
          </div>
          {/* Start of address */}
          <div className="form-group row">
            <label for="address" className="col-sm-3 col-form-label">
              Address:
            </label>
            <div className="col-sm-9">
              <input
                id="Address"
                name="Address"
                placeholder="Street Address"
                className="form-control here"
                type="text"
                onChange={this.handleAddressChange}
                value={this.state.address}
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="city" className="col-sm-3 col-form-label">
              City:
            </label>
            <div className="col-sm-9">
              <input
                id="city"
                name="city"
                placeholder="City"
                className="form-control here"
                type="text"
                onChange={this.handleCityChange}
                value={this.state.city}
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="state" className="col-sm-3 col-form-label">
              State:
            </label>
            <div className="col-sm-9">
              <input
                id="state"
                name="state"
                placeholder="State"
                className="form-control here"
                type="text"
                onChange={this.handleStateChange}
                value={this.state.State}
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="zipcode" className="col-sm-3 col-form-label">
              Zipcode:
            </label>
            <div className="col-sm-9">
              <input
                id="zipcode"
                name="Zipcode"
                placeholder="Zipcode"
                className="form-control here"
                type="text"
                maxlength="5"
                onChange={this.handleZipcodeChange}
                value={this.state.zipcode}
              />
            </div>
          </div>
          {/* End of address form */}

          <div className="form-group row">
            <label for="phoneNumber" className="col-sm-3 col-form-label">
              Phone Number:
            </label>
            <div className="col-sm-9">
              <input
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone Number"
                className="form-control here"
                type="text"
                maxlength="10"
                onChange={this.handlePNumberChange}
                value={this.state.phoneNumber}
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputEmail" className="col-sm-3 col-form-label">
              Email:
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email Address"
                onChange={this.handleEmailChange}
                value={this.state.email}
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword" className="col-sm-3 col-form-label">
              Password:
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                onChange={this.handlePassChange}
                value={this.state.password}
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword" className="col-sm-3 col-form-label">
              Confirm Password:
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </form>
        <button
          type="submit"
          className="btn btn buttons"
          id="register"
          onClick={this.submit}
        >
          Register
        </button>
        <br />
      </div>
    );
  }
}
