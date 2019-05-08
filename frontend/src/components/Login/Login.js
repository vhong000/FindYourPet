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
import PetProfile from "../PetProfile/PetProfile";
import UserProfile from "../Profiles/UserProfile";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    emailChildren: "",
    passwordChildren: "",
    loginFail: false
  };
    this.send = this.send.bind(this);
    this.showMessage = this.showMessage.bind(this);
  }

  

  submit = () => {
    sendData.send(
      this.state.emailChildren,
      this.state.passwordChildren,
      this.props.authenticated
    );
    this.send();
  };

  send() {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        email: this.state.emailChildren,
        password: this.state.passwordChildren
      })
    })
      .then(response => {
        if (response.status === 200) {
          console.log("Successful login");
        } else {
          this.setState({loginFail: true})
          console.log(response.status);

          throw new Error("Sign-in failed");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleEmailChange = event => {
    this.setState({ emailChildren: event.target.value });
  };

  handlePassChange = event => {
    this.setState({ passwordChildren: event.target.value });
  };

  showMessage(){
    if(this.state.loginFail === true ){
      return <div className="message"> Wrong Email or Password </div>
    }
    else if(this.state.loginFail === false){
      return <div> <br /> </div>
    }
  }

  render() {
    if (this.props.auth) {
      return <Redirect to={"/"} />;
    } else {
      return (
        <div>
          <div className="panel">
            <form id="loginform">
              <h2 className="text-focus-in">Login</h2>
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
                  <Link className="link" to="/SignUp">
                    Don't have an account? Register here.
                  </Link>
                </div>
                <div className="col-5" />
              </div>
            </form>
            <div className="div p-2">
              {this.showMessage()}
              <button
                type="submit"
                className="btn btn buttons"
                onClick={this.submit}
                id="loginbutton"
              >
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}