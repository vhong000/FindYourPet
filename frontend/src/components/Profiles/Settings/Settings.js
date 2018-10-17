import React, { Component } from 'react'

export default class Settings extends Component {
  render() {
    return (
      <div>      
        <div class="list-group ">
            <a href="#" class="list-group-item list-group-item-action active">Dashboard</a>                 
            <a class="list-group-item list-group-item-action">Settings</a>
        </div>
        <br/>				
        <div class="list-group">                                   
            <a class="list-group-item list-group-item-action">
                <p>Settings Content</p>
                <p>Settings Content</p>
                <p>Settings Content</p>
                <p>Settings Content</p>  
            </a>                    
        </div>         
      </div>
    )
  }
}
