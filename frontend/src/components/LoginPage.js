import React, { Component } from 'react';
import styles from './Login/Login.css';
import logo from '../Images/paw.png';

export default class LoginPage extends Component {
  render() {
    return (
      <div className="panel">
            <h2>login</h2> 
            <img src={logo} className="App-logo" alt="logo" width="50" /> 
            <form id="loginform">
              <div className="form-group">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
              </div>
              <div className="forgot">
              <a href="reset.html">Forgot password?</a>               																	
              </div>            
              <button type="submit" className="btn btn-primary">Login</button>                  
            </form>
      </div>       
    )
  }
}
