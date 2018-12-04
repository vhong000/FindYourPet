import React, { Component } from 'react';
import './ZipcodeSetter.css';

export default class ZipcodeSetter extends Component {


  render() {
    return (     
          <div className="card my-4" id="some">
            <h5 className="card-header" id="some">Search by zip code:</h5>
            <div className="card-body">
              <div className="row">
                <div className="col-md-10" id="maincolor"><input className="form-control" placeholder="Set your zip code..." /></div>
              </div>           
              <div className="row" id="some">
                <div className="col-md-2"><button type="submit">Set!</button></div>              
              </div>                       
            </div>
          </div>      
    )
  }
}
