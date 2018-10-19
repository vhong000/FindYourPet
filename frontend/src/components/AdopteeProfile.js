import React, { Component } from 'react'
import Settings from './AdoptionComps/Settings';
import CommonInfoSection from './AdoptionComps/CommonInfoSection';
import PetInformation from './AdoptionComps/PetInformation';
import UpdateDelete from './AdoptionComps/UpdateDelete';
import MultipleImagesUploader from './AdoptionComps/MultipleImagesUploader';
import AvatarUploader from './AdoptionComps/AvatarUploader';

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
                                <PetInformation />                             
                                <CommonInfoSection/>                                
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
