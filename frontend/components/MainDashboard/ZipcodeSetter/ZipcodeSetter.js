import React, { Component } from 'react';
import './ZipcodeSetter.css';

export default class ZipcodeSetter extends Component {
  render() {
    return (
      <div>       
        <div className="card my-4">
        <h5 className="card-header">Pets Near me: </h5>
            <div className="card-body">
                <div className="input-group">
                <input type="text" className="form-control" placeholder="Set Your zip code..."/>
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Set!</button>
                </span>
                </div>
            </div>
        </div>        
      </div>
    )
  }
}
