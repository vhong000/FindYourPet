import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  render() {
    return (
    <div className="panel">            
      <form id="loginform">
        <h2>login</h2> 
        <br/>         
            <div className="form-group">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
            </div>
            <div className="forgot">
            <a href="reset.html">Forgot password?</a>               																	
            </div>            
            <button type="submit" className="btn btn">Login</button>                  
       </form>
    </div>       
    )
  }
}

