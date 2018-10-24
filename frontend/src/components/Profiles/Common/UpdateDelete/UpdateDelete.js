import React, { Component } from 'react';
import './UpdateDelete.css'

export default class UpdateDelete extends Component {
  render() {
    return (
      <div>
        <div class="form-group row">
            <div class="offset-4 col-8">
                <button name="submit" type="submit" class="btn btn-primary">Update My Profile</button>
                <button name="submit" type="submit" class="btn btn-primary" id="delete">Delete Profile</button>
            </div>  
        </div>        
      </div>
    )
  }
}
