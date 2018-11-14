import React, { Component } from 'react';
import logo from '../../Images/paw.png';
import Login from './Login';
import Register from './Register';
import './Login.css';

export default class LoginPage extends Component {
  render() {
    return (
    <div className="container text text-center">
      <img className="panel" id="logo" src={logo}  alt="logo" />
      <div className="row">
        <div className="col">
          <Login />
        </div>
        <div className="col">
          <Register/>
        </div>
      </div> 
    </div>
    )
  }
}
