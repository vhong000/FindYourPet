import React, { Component } from 'react';
import './MainNavigation.css'

export default class MainNavigation extends Component {
  render() {
    return (
      <div>
          <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                  <div className="card-body text-center">                                                                    
                      <h4 className="text-uppercase m-0">FIND CATS</h4>                                         
                      <img className="img-fluid mb-5 d-block mx-auto" src="" alt="cat image"/>                  
                  </div>
              </div>            
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                  <div className="card-body text-center">                                                                    
                      <h4 className="text-uppercase m-0">FIND DOGS</h4>                                         
                      <img className="img-fluid mb-5 d-block mx-auto" src="" alt="DOG image"/>                  
                  </div>
              </div>            
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                  <div className="card-body text-center">                                                                    
                      <h4 className="text-uppercase m-0">FIND ME</h4>                                         
                      <img className="img-fluid mb-5 d-block mx-auto" src="" alt="ME image"/>                  
                  </div>
              </div>            
          </div>      
          </div>        
      </div>
    )
  }
}
