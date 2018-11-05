import React, { Component } from 'react'
import Settings from '../Settings/Settings';
import CommonInfoSection from '../Common/CommonInfoSectiom';
import PetImages from './PetImages';
import UpdateDelete from '../Common/UpdateDelete/UpdateDelete';
import AvatarUploader from '../Common/AvatarUploader/AvatarUploader';


export default class AdopteeProfile extends Component {
  render() {
    return (
    <div class="container">
        <div class="row">
            <div class="col-md-3 ">
                <Settings />
            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-body">                    
                       <div class="row">
                            <div class="col-md-12">                                
                            <AvatarUploader/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">                                
                                <CommonInfoSection/>                                
                                <PetImages />
                                <UpdateDelete />
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
