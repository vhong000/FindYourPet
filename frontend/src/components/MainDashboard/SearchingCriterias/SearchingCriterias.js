import React, { Component } from 'react';
import './SearchingCriterias.css';

export default class SearchingCriterias extends Component {
  render() {
    return (
      <div>
        <div className="card my-4">
            <h5 className="card-header">Searching criterias:</h5>
            <div className="card-body">
                <div className="input-group">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="option1" autoComplete="off" checked /> Dog
                            </label>
                        
                            <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2" autoComplete="off" /> Cat
                            </label>                           
                    </div>
                
                    <div className="dropdown" id="catdog">
                        <br/>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Age</a>
                            <a className="dropdown-item" href="#">Zip</a>
                            <a className="dropdown-item" href="#">Bread</a>
                            </div>
                    </div>             
                </div>
            </div>
        </div>        
      </div>
    )
  }
}
