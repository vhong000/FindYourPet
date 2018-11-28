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

// const sendData = {
//   email: "",
//   password: "",

//   send(email, password, cb) {
//     fetch("/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8"
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password
//       })
//     }).then(response => {
//       console.log("sign-in response status " + response.status);
//       if (response.status === 200) {
//         console.log("success");
//         cb();
//       }
//     });
//   }
// };

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
            <h2>Login</h2>
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
          <div className="div">
            <button type="submit" className="btn btn" onClick={this.submit}>
              Login
            </button>
          </div>
        </div>
      );
    }
  }
}