import React, { Component } from 'react';
import './LikedPets.css';
import Interested from '../../Interested/Interested';

export default class LikedPets extends Component {
  render() {
    return (
      <div>
        <div className="card my-4" id="boxstyle">
        <h5 className="card-header" id="maincolor">Liked Pets</h5>
        <div className="card-body">
            <Interested />
            <Interested />
            <Interested />
        </div>
        </div>        
      </div>
    )
  }
}
