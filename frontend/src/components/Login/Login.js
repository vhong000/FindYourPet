import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import "./Login.css";

const sendData = {
  email: "",
  password: "",

  send(email, password, cb) {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          console.log("success");
        }
        //   this.setState({ redirectToReferrer: true });
      })
      .then(body => {
        // console.log(body);
        cb();
        // return;
      });
  }
};

export default class Login extends Component {
  state = {
    redirectToReferrer: false,
    email: "",
    password: ""
  };

  submit = () => {
    sendData.send(this.state.email, this.state.password, () => {
      this.setState({ redirectToReferrer: true });
    });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePassChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    let { from } = { pathname: "/" };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="panel">
        <form id="loginform">
          <h2>login</h2>
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
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              onChange={this.handlePassChange}
              value={this.state.password}
            />
          </div>
          <div className="forgot">
            <a href="reset.html">Forgot password?</a>
          </div>
        </form>
        <button type="submit" className="btn btn" onClick={this.submit}>
          Login
        </button>
      </div>
    );
  }
}
