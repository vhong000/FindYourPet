import React, { Component } from 'react'
import ZipperSetter from '../MainDashboard/ZipcodeSetter/ZipcodeSetter';

import SearchingCriterias from '../MainDashboard/SearchingCriterias/SearchingCriterias';
import LikedPets from '../MainDashboard/LikedPets/LikedPets';
import PetCard from './PetCard';

export default class PetProfile extends Component {
  render() {
    return (
      <div>
        <div>      
          <div className="container">             
              <ZipperSetter/>  
              <div className="row">         
                  <div className="col-md-9">                
                      <PetCard/>                                                                               
                  </div>            
                  <div className="col-md-3">                
                      <SearchingCriterias />                         
                      <LikedPets />                
                  </div>              
              </div>    
          </div>     
        </div>        
      </div>
    )
  }
}
