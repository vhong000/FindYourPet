import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../Images/paw.png'

export default class Navbar extends Component {
  render() {
    return (  
    <div>
      <ul className = "topnav">
        <li><a className = "active" href="#home"><img src={logo} className="App-logo" alt="logo" id="logo"/>Home</a></li>        
        <li><a href="#news">Liked Pets</a></li>  
        <li className="right"><a href="#about">Sign Out</a></li>
      </ul>
    </div> 	 
    )
  }
}
