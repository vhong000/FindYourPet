import React, { Component } from 'react'
import MultipleImagesUploader from '../ImageUploaders/MultipleImagesUploder/MultipleImagesUploader';

export default class PetInformation extends Component {
  render() {
    return (
      <div>
      <h4>Pet Information</h4>
      <MultipleImagesUploader/>    
      <hr/>
            <div class="row">
            <div class="col-md-12">
                <form id="AdopteePetInfo">                                     
                    <div class="form-group row">
                        <label for="text" class="col-4 col-form-label">Pet Name*</label>
                        <div class="col-8">
                            <input id="text" name="text" placeholder="Pet Name" class="form-control here"
                                required="required" type="text"/>
                        </div>
                    </div>
                    <div class="form-group row">
                            <label for="text" class="col-4 col-form-label">Pet Type*</label>
                            <div class="col-8">
                                <input id="text" name="text" placeholder="Pet Type Cat/Dog?" class="form-control here"
                                    required="required" type="text"/>
                            </div>
                    </div>
                    <div class="form-group row">
                            <label for="text" class="col-4 col-form-label">Pet Bread*</label>
                            <div class="col-8">
                                <input id="text" name="text" placeholder="Pet Bread" class="form-control here"
                                    required="required" type="text"/>
                            </div>
                    </div> 
                    <div class="form-group row">
                        <label for="text" class="col-4 col-form-label">Pet Age</label>
                        <div class="col-8">
                            <input id="text" name="text" placeholder="Pet Age" class="form-control here"
                                required="required" type="text"/>
                        </div>
                    </div>  
                    <div class="form-group row">
                        <label for="text" class="col-4 col-form-label">Medical history</label>
                        <div class="col-8">
                            <textarea id="publicinfo" name="med" cols="40" rows="4" class="form-control"></textarea>
                        </div>
                    </div>                                                              
                    <div class="form-group row">
                        <label for="publicinfo" class="col-4 col-form-label">Pet Info</label>
                        <div class="col-8">
                            <textarea id="publicinfo" name="publicinfo" cols="40" rows="4" class="form-control"></textarea>
                        </div>
                    </div>              
                </form>
            </div>
        </div>        
      </div>
    )
  }
}
