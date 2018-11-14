import React, { Component } from 'react';
import './Login.css';

export default class Register extends Component {
  render() {
    return (
    <div className="panel">            
      <form id="loginform">
        <h2>Register</h2>
        <br/>          
            <div className="form-group">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" />
            </div> 
            <div className="form-group">              
                <input id="name" name="name" placeholder="First Name" class="form-control here" type="text"/>                
            </div>
            <div className="form-group">        
                <input id="lastname" name="lastname" placeholder="Last Name" className="form-control here" type="text"/>
            </div>   
            <div className="form-group">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="inputPassword" placeholder="Confirm Password" />
            </div>            
            <button type="submit" className="btn btn" id="register">Register</button>                  
       </form>
       <br/>
    </div>       
    )
  }
}

