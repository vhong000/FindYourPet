import React, { Component } from 'react';
import Settings from '../Profiles/Settings/Settings';
import PetImages from '../Profiles/AdopteeProfile/PetImages';
import PostButton from './PostButton';
import './PostPet.css';
import PetInformation from '../Profiles/AdopteeProfile/PetInformation';
import EnergyLevel from './EnergyLevel';
import {Redirect} from 'react-router-dom';


export default class PostPet extends Component {
  render() {
    if(this.props.auth === false) {
        return <Redirect to={"/"}/>
    } else {
        return (
            <div class="container">   
        <br/>
        <h2>Post a Pet</h2>
            <div class="row">
                <div class="col-md-3 ">
                    <Settings />
                </div>
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-body">                    
                           <div class="row">
                                <div class="col-md-12">                                
                                
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">                                                    
                                    <PetImages />  
                                    <PetInformation/>
                                    <EnergyLevel />                     
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
}
