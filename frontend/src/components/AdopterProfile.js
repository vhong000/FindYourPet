import React, { Component } from 'react';
import Settings from './AdoptionComps/Settings'
import AvatarUploader from './AdoptionComps/AvatarUploader'
import CommonInfoSection from './AdoptionComps/CommonInfoSection'
import UpdateDelete from './AdoptionComps/UpdateDelete'


export default class AdopterProfile extends Component {
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