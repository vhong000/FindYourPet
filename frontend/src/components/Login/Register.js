import React, { Component } from "react";
import sendData from "../../auth";
import "./Login.css";

export default class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  submit = () => {
    sendData.sendRegister(
      this.state.firstName,
      this.state.lastName,
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

  handlePassChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="panel">
        <form id="loginform">
          <h2>Register</h2>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email Address"
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
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
          <div className="form-group">
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
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              onChange={this.handlePassChange}
              value={this.state.password}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Confirm Password"
            />
          </div>
        </form>
        <button
          type="submit"
          className="btn btn"
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
