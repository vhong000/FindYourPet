import React, { Component } from 'react';
import './ZipcodeSetter.css';

export default class ZipcodeSetter extends Component {
  render() {
    return (     
           
          <div className="card my-4">
            <h5 className="card-header">Set your zip code:</h5>
            <div className="card-body">
              <div className="row">
                <div className="col-md-10"><input className="form-control" placeholder="Set your zip code..." id="setbutton"/></div>
                <div className="col-md-2"><button type="submit" className="btn btn" id="setbutton">Set!</button></div>
              </div>            
            </div>
          </div>      
    )
  }
}
