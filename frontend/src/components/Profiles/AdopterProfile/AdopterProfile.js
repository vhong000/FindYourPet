import React, { Component } from 'react'
import Settings from '../Settings/Settings';
import CommonInfoSection from '../Common/CommonInfoSectiom';
import UpdateDelete from '../Common/UpdateDelete/UpdateDelete';
import AvatarUploder from '../Common/AvatarUploader/AvatarUploader';

export default class AdopterProfile extends Component {
  render() {
    return (
        <div class="container">
        <br/>
        <h2>Adopter Profile</h2>
        <div class="row">
            <div class="col-md-3 ">
                <Settings />
            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-body">
                       <div class="row">
                            <div class="col-md-12"> 
                                <AvatarUploder/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <CommonInfoSection/>
                                <UpdateDelete/> 
                            </div>
                        </div>                
                    </div>
                </div>
            </div>
        </div>
    </div>
   

    )
  }
}
