import React, { Component } from "react";
import ZipperSetter from "../ZipcodeSetter/ZipcodeSetter";
import UserCard from "../UserCard/UserCard";
import Pagination from "../Pagination/Pagination";
import SearchingCriterias from "../SearchingCriterias/SearchingCriterias";
import LikedPets from "../LikedPets/LikedPets";
import cardphoto from "../../../Images/paw.png";
import "./DashboardBody.css";

function PetCard(props) {
  return (
    <div className="col-md-4 mb-3 mb-md-0" id="usercard">
      <div className="card py-4 h-100">
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

export default class DashboardBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getPet = this.getPet.bind(this);
  }

  getPet() {
    fetch("/api/pet/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          return response.json();
        } else {
          console.log("Something went wrong");
        }
      })
      .then(jsonData => {
        console.log(jsonData);
        this.setState({ data: jsonData });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let pets = [];

    for (let i = 0; i < this.state.data.length; i++) {
      let item = this.state.data[i];
      pets.push(
        <PetCard
          key={i}
          name={item.name}
          species={item.species}
          breed={item.breed}
          dob={item.dob}
          gender={item.gender}
          description={item.description}
        />
      );
    }

    return (
      <div>
        <div className="container">
          <div className="card my-4">
            <h5 className="card-header">Set your zip code:</h5>
            <div className="card-body">
              <div className="row">
                <div className="col-md-10">
                  <input
                    className="form-control"
                    placeholder="Set your zip code..."
                    id="setbutton"
                  />
                </div>
                <div className="col-md-2">
                  <button
                    type="submit"
                    className="btn btn"
                    id="setbutton"
                    onClick={this.getPet}
                  >
                    Set!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="card my-4">
                <div className="container">
                  <div className="row">{pets}</div>
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
    );
  }
}
