import React, { Component } from "react";
import "./MainNavigation.css";
<<<<<<< HEAD
// import "../../../Images/pic1.jpg";
// options
=======
import "../../../Images/pic1.jpg";
// options
import cat from '../../../Images/findcat.jpg';
import dog from '../../../Images/finddog.jpg';
import pets from '../../../Images/pets.jpg';
>>>>>>> master

export default class MainNavigation extends Component {
  render() {
    return (
      <div className="container mainNavigation">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <h4 className="text-uppercase m-0">FIND CATS</h4>
                <img
                  className="img-fluid mb-5 d-block mx-auto img-size"
                  src="https://www.designfreelogoonline.com/wp-content/uploads/2015/05/00496-cat-logo-design-free-logomaker-01.png"
                  alt="Cat image"
                />
      //second option
//                   <img className="img-fluid mb-5 d-block mx-auto" src={dog} alt="DOG image"/>   

              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
      //options 2
//       <div className="container">
//                   <h4 className="text-uppercase m-0 text-center">FIND CATS</h4> 
//                   <img className="img-fluid mb-5 d-block mx-auto" src={cat} alt="DOG image"/>                       
//               </div>
              <div className="card-body text-center">
                <h4 className="text-uppercase m-0">FIND DOGS</h4>
                <img
                  className="img-fluid mb-5 d-block mx-auto  img-size"
                  src="https://cottonwoodpetresort.com/Images/Main/the-dog-bus-logo-right.png"
                  alt="Dog image"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
      //other options
//               <div className="container">
//                   <h4 className="text-uppercase m-0 text-center">OTHER PETS</h4> 
//                   <img className="img-fluid mb-5 d-block mx-auto" src={pets} alt="DOG image"/>  
              <div className="card-body text-center">
                <h4 className="text-uppercase m-0">FIND ME</h4>
                <img
                  className="img-fluid mb-5 d-block mx-auto  img-size"
                  src="https://b.kisscc0.com/20180815/waq/kisscc0-computer-icons-symbol-map-location-address-local-growth-icon-5b743876bb78f1.9295151515343432867679.png"
                  alt="Find me image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
