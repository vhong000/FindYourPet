import React, { Component } from 'react';
import './LikedPets.css';

export default class LikedPets extends Component {
  render() {
    return (
      <div>
        <div className="card my-4" id="boxstyle">
        <h5 className="card-header" id="maincolor">Liked Pets</h5>
        <div className="card-body">
            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
        </div>
        </div>        
      </div>
    )
  }
}
