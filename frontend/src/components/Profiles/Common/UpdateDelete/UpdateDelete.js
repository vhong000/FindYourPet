import React, { Component } from 'react';
import './UpdateDelete.css'

export default class UpdateDelete extends Component {
  render() {
    return (
      <div>
        <div className="form-group row">
            <div className="offset-4 col-8">
                <button name="submit" type="submit" className="btn btn-primary" id="update">Update My Profile</button>
                <button name="submit" type="submit" className="btn btn-primary" id="delete">Delete Profile</button>
            </div>  
        </div>        
      </div>
    )
  }
}
