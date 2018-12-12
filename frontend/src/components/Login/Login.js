import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import "./Login.css";
import sendData from "../../auth";


export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    emailChildren: "",
    passwordChildren: ""
  };

  submit = () => {
    sendData.send(
      this.state.emailChildren,
      this.state.passwordChildren,
      this.props.authenticated
    );
  };

  handleEmailChange = event => {
    this.setState({ emailChildren: event.target.value });
  };

  handlePassChange = event => {
    this.setState({ passwordChildren: event.target.value });
  };

  render() {
    if (this.props.auth) {
      return <Redirect to={"/"} />;
    } else {
      return (
        <div className="panel">
          <form id="loginform">
            <h2  className="text-focus-in">Login</h2>
            <br />

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email Address"
                onChange={this.handleEmailChange}
                value={this.state.emailChildren}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                onChange={this.handlePassChange}
                value={this.state.passwordChildren}
              />
            </div>

            <div className="row">
              <div className="col-7">
                <Link to="/SignUp">Don't have an account? Register here.</Link>
              </div>
              <div className="col-5">
                <Link to="/Reset">Forgot password?</Link>
              </div>
            </div>
          </form>
          <div className="div p-2">
            <button type="submit" className="btn btn" onClick={this.submit} id="loginbutton">
              <span>Login</span>
            </button>
          </div>
        </div>
      );
    }
  }
}
