import React, { Component } from 'react';
import './Settings.css';

export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {     
      showSettings: false      
    }   
  }
  handleStttingsShow = () => {
    const doesShow = this.state.showSettings;
    this.setState({ showSettings: !doesShow });
  }

  render() {
    return (
      <div>      
        <div class="list-group ">
            <a class="list-group-item list-group-item-action active" id="settings">Dashboard</a>                 
            <a class="list-group-item list-group-item-action" onClick={this.handleStttingsShow}>Settings</a>
        </div>
        <br/>	
        <div class="list-group">  
        {
          this.state.showSettings === true ?
           <div>
           <a class="list-group-item list-group-item-action">
              <p>Settings Content</p>
              <p>Settings Content</p>
              <p>Settings Content</p>
              <p>Settings Content</p> 
              <p>Settings Content</p>
              <p>Settings Content</p>
              <p>Settings Content</p>
              <p>Settings Content</p> 
              <p>Settings Content</p>
              <p>Settings Content</p>
              <p>Settings Content</p>
              <p>Settings Content</p> 
            </a>  
          </div> : null
        }	                           
        </div>             
      </div>
    )
  }
}
