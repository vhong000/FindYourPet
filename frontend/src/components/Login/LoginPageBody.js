import React, { Component } from "react";
import logo from "../../Images/paw.png";
import Login from "./Login";
import "./Login.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container text text-center">
        <img className="panel" id="logo" src={logo} alt="logo" />
        <div className="row">
          <div className="col">
            <Login
              auth={this.props.auth}
              authenticated={this.props.authenticated}
            />
          </div>
        </div>
      </div>
    );
  }
}
