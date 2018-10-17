import React, { Component } from 'react'
import Settings from '../Settings/Settings';
import CommonInfoSection from '../Common/CommonInfoSectiom';
import PetInformation from './PetInformation';
import UpdateDelete from '../Common/UpdateDelete/UpdateDelete';
import MultipleImagesUploader from '../ImageUploaders/MultipleImagesUploder/MultipleImagesUploader';
import AvatarUploader from '../ImageUploaders/AvatarUploder/AvatarUploader';

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
                                <PetInformation />
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
