import React, { Component } from 'react';
import ZipperSetter from '../ZipcodeSetter/ZipcodeSetter';
import UserCard from '../UserCard/UserCard';
import Pagination from '../Pagination/Pagination';
import SearchingCriterias from '../SearchingCriterias/SearchingCriterias';
import LikedPets from '../LikedPets/LikedPets';

export default class DashboardBody extends Component {
  render() {
    return (
      <div>      
        <div className="container">             
            <ZipperSetter/>  
            <div className="row">         
                    <div className="col-md-9">      
                            <div className="card my-4">              
                                <div className="container">
                                    <div className="row">  
                                        <UserCard/>
                                        <UserCard/>  
                                        <UserCard/>
                                        <UserCard/>
                                        <UserCard/>  
                                        <UserCard/>  
                                    </div>
                                </div>                     
                            </div>             
                            <Pagination />                        
                    </div>            
                    <div className="col-md-3">                
                        <SearchingCriterias />                         
                        <LikedPets />                
                    </div>              
            </div>    
        </div>     
      </div>
    )
  }
}
