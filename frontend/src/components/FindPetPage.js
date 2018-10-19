import React, { Component } from 'react';

const FindPetPage = () => (
	<div>
		<DashboardBody/>
	</div>
	)

class DashboardBody extends Component {
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

const UserCard = () => (
  <div className="col-md-4 mb-3 mb-md-0"  id="usercard">
            <div className="card py-4 h-100">
                <div className="card-body text-center">                                                                    
                    <h4 className="text-uppercase m-0">Usercard</h4>
                    <hr className="my-4" />                     
                                
                    <div className="small text-black-50"> pet description pet descriptionpet descriptionpet 
                    descriptionpet descriptionpet description</div>
                </div>
            </div>
        </div> 
  )

const ZipperSetter = () => (
  <div className="card my-4">
            <h5 className="card-header">Set your zip code:</h5>
            <div className="card-body">
              <div class="row">
                <div class="col-md-10"><input className="form-control" placeholder="Set your zip code..."/></div>
                <div class="col-md-2"><button type="submit" className="btn btn" id="setbutton">Set!</button></div>
              </div>            
            </div>
          </div>
  )

const LikedPets = () => (
  <div>
        <div className="card my-4">
        <h5 className="card-header">Liked Pets</h5>
        <div className="card-body">
            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
        </div>
        </div>        
      </div>
  )

const Pagination = () => (
  <div>
        <ul className="pagination justify-content-center mb-4">
            <li className="page-item">
                <a className="page-link" href="#">&larr; Previous page</a>
            </li>
            <li className="page-item disabled">
                <a className="page-link" href="#">Next Page &rarr;</a>
            </li>
        </ul>      
    </div>
  )

const SearchingCriterias = () => (
  <div>
        <div className="card my-4">
            <h5 className="card-header">Searching criterias:</h5>
            <div className="card-body">
                <div className="input-group">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="option1" autocomplete="off" checked /> Dog
                            </label>
                        
                            <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2" autocomplete="off" /> Cat
                            </label>                           
                    </div>
                
                    <div className="dropdown" id="catdog">
                        <br/>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Age</a>
                            <a className="dropdown-item" href="#">Zip</a>
                            <a className="dropdown-item" href="#">Bread</a>
                            </div>
                    </div>             
                </div>
            </div>
        </div>        
      </div>
  )
export default FindPetPage