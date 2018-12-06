import React, { Component } from "react";
import cardphoto from "../../Images/paw.png";
import "./PetCard.css";
import { Link } from "react-router-dom";

export default function PetCard(props) {
  console.log(props)
  return (
    <div className="col-md-4 mb-3 mb-md-0" id="usercard">
      <div className="card h-100">
      <Link to={`/pet/${props.id}`} >
        <h4 className="text-uppercase m-0 card-header">{props.name}</h4>
      </Link>
        <div className="card-body text-center">
          <hr className="my-4" />
          <img
            className="img-fluid mb-5 d-block mx-auto"
            src={cardphoto}
            alt="usercard"
          />
          <div className="small text-black-50">
            <ul className="card-text ItemList">
              <li> Species: {props.species}</li>
              <li> Breed: {props.breed}</li>
              <li> Gender: {props.gender}</li>
              <li> Age: {props.dob}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
