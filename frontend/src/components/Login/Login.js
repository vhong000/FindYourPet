import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Register from "./Register";
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
    emailChildren: "",
    passwordChildren: ""
  };

  constructor(props) {
    super(props);
  }

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
    let { from } = { pathname: "/FindPetPage" };
    let { redirectToReferrer } = this.props.redirectToReferrer;

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
          <div className="btn-float">
            <div className="right-float">
              <a href="reset.html">Forgot password?</a>
            </div>
            <div className="left-float">
              <Link to="/signup">Don't have an account? Register here | </Link>
            </div>
          </div>
        </form>

        <button type="submit" className="btn btn" onClick={this.submit}>
          Login
        </button>
        <Route path="signup" component={Register} />
      </div>
    );
  }
}
