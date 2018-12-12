import React, { Component } from "react";
import cardphoto from "../../Images/paw.png";
import "./PetCard.css";
import { Link } from "react-router-dom";

export default function PetCard(props) {
  return (
    <div className="col-md-4 mb-3 mb-md-0" id="usercard">
      <div className="card h-100">
        <Link to={`/pet/${props.id}`}>
          <h4 className="text-uppercase m-0 card-header">{props.name}</h4>
        </Link>
        <div className="card-body text-center">
          <hr className="my-4" />
					{ props.imageUrl ? (
						<img
							className="img-fluid mb-5 d-block mx-auto"
							src={props.imageUrl}
							alt="usercard"
						/>
					) : ( 
						<img
							className="img-fluid mb-5 d-block mx-auto"
							src={cardphoto}
							alt="usercard"
						/>
					)}
          <div className="small text-black-50 text-left">
            <ul className="">
              <li> Species: {props.species}</li>
              <li> Breed: {props.breed}</li>
              <li> Gender: {props.gender}</li>
              <li> Age: {props.dob}</li>
              <li> Description: {props.description}</li>
              <li> Energy level: {props.energy}</li>
              <li> Attachment: {props.attachment}</li>
              <li> Zipcode: {props.zipcode}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
