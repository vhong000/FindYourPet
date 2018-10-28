import React from 'react';

const CommonInfoSection = () => (
 <div>        
        <form id="">
            <div class="form-group row">
                <label for="username" class="col-4 col-form-label">User Name*</label>
                <div class="col-8">
                    <input id="username" name="username" placeholder="Username" class="form-control here"
                        required="required" type="text"/>
                </div>
            </div>
            <div class="form-group row">
                <label for="name" class="col-4 col-form-label">First Name</label>
                <div class="col-8">
                    <input id="name" name="name" placeholder="First Name" class="form-control here"
                        type="text"/>
                </div>
            </div>
            <div class="form-group row">
                <label for="lastname" class="col-4 col-form-label">Last Name</label>
                <div class="col-8">
                    <input id="lastname" name="lastname" placeholder="Last Name" class="form-control here"
                        type="text"/>
                </div>
            </div> 
            <div class="form-group row">
                    <label for="lastname" class="col-4 col-form-label">Zip Code</label>
                    <div class="col-8">
                        <input id="lastname" name="lastname" placeholder="Enter Your Zip Code" class="form-control here"
                            type="text"/>
                    </div>
            </div> 
            <div class="form-group row">
                    <label for="lastname" class="col-4 col-form-label">User Information</label>
                    <div class="col-8">
                            <textarea id="publicinfo" name="publicinfo" placeholder="Enter Information about yourself and pet" cols="40" rows="4" class="form-control"></textarea>
                    </div>
            </div>                                  
            <div class="form-group row">
                <label for="select" class="col-4 col-form-label">Display Name public as</label>
                <div class="col-8">
                    <select id="select" name="select" class="custom-select">
                        <option value="admin">Some Name</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-4 col-form-label">Email*</label>
                <div class="col-8">
                    <input id="email" name="email" placeholder="Email" class="form-control here"
                        required="required" type="text"/>
                </div>
            </div>                        
            <div class="form-group row">
                <label for="newpass" class="col-4 col-form-label">New Password</label>
                <div class="col-8">
                    <input id="newpass" name="newpass" placeholder="New Password" class="form-control here"
                        type="text"/>
            </div>
            </div>
            <hr/>
                            
        </form>               
    </div>
) 

export default CommonInfoSection;