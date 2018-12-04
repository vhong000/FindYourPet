import React, { Component } from 'react';
import cardphoto from "../../Images/paw.png";
import './PetCard.css';

export default function PetCard(props) {
  return (
    <div className="col-md-4 mb-3 mb-md-0" id="usercard">
      <div className="card h-100">
        <h4 className="text-uppercase m-0 card-header">{props.name}</h4>
        <div className="card-body text-center">
          <hr className="my-4" />
          <img
            className="img-fluid mb-5 d-block mx-auto"
            src={cardphoto}
            alt="usercard"
          />
          <div className="small text-black-50">
            <ul className="card-text">
              <li> Species: {props.species}</li>
              <li> Breed: {props.breed}</li>
              <li> Gender: {props.gender}</li>
              <li> DoB: {props.dob}</li>
              <li> description: {props.description}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

