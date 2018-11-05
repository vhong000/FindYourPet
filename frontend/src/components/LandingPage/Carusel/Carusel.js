<<<<<<< HEAD
import React, { Component } from "react";
import "./Carusel.css";

import logo1 from "../../../Images/logo1.png";
import logo2 from "../../../Images/logo2.png";
import logo3 from "../../../Images/logo3.png";
=======

import React, { Component } from "react";
import "./Carusel.css";

import logo1 from "../../../Images/logo1.png";
import logo2 from "../../../Images/logo2.png";
import logo3 from "../../../Images/logo3.png";
// second options
import pic1 from '../../../Images/cat.jpg';
import pic2 from '../../../Images/dog.jpg';
import pic3 from '../../../Images/adultcat.jpg';
>>>>>>> master

export default class Carusel extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" id="pic1">
            <img className="d-block w-100" src={logo1} alt="First slide" />
          </div>
          <div className="carousel-item" id="pic2">
            <img className="d-block w-100" src={logo2} alt="Second slide" />
          </div>
          <div className="carousel-item" id="pic3">
            <img className="d-block w-100" src={logo3} alt="Third slide" />
<<<<<<< HEAD
=======
// ======= options2
//         <div className="carousel-inner" >
//           <div className="carousel-item active"  id="pic1">
//             <img className="img-fluid" src={pic2} alt="First slide"/>
//           </div>
//           <div className="carousel-item"  id="pic1">
//             <img className="img-fluid" src={pic1} alt="Second slide"/>
//           </div>
//           <div className="carousel-item"  id="pic1">
//             <img className="img-fluid" src={pic3} alt="Third slide"/>
>>>>>>> master
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
