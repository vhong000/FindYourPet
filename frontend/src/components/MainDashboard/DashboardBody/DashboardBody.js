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

export default class DashboardBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      zipcode: ""
    };
    this.getPet = this.getPet.bind(this);
    this.getPetByZipcode = this.getPetByZipcode.bind(this);
  }

  handleChangeYoungToOld = () => {
    if (this.state.zipcode === "") {
      console.log("Success getting ordered from young to oldest");

      //if there is no zipcode
      fetch("/api/pet/asc", {
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
    } else {
      //if there is zipcode
    }
  };

  handleChangeOldToYoung = () => {
    if (this.state.zipcode === "") {
      //if there is no zipcode
      console.log("Success getting ordered from oldest to youngest");
      fetch("/api/pet/desc", {
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
    } else {
      //if there is zipcode
    }
  };

  componentDidMount() {
    this.getPet();
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

  getPetByZipcode(zipcode) {
    console.log("zip", zipcode);
    fetch("/api/pet/zipcode/" + zipcode, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(response => {
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

  handleZipChange(e) {
    const input = e.target.value;
    this.setState({ zipcode: input });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { zipcode } = this.state;
    if (zipcode) {
      this.getPetByZipcode(this.state.zipcode);
    } else {
      this.getPet();
    }
  }

  render() {
    const { data } = this.state;

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
                    onChange={e => this.handleZipChange(e)}
                  />
                </div>
                <div className="col-md-2">
                  <button
                    type="submit"
                    className="btn btn-outline-warning"
                    id="setbutton"
                    onClick={e => this.handleSubmit(e)}
                  >
                    Find!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="card my-4">
                <div className="container">
                  <div className="row">
                    {data
                      ? data.map(pet => {
                          return (
                            <PetCard
                              name={pet.name}
                              species={pet.species}
                              breed={pet.breed}
                              dob={pet.dob}
                              gender={pet.gender}
                              description={pet.description}
                              key={pet.id}
                            />
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
              <Pagination />
            </div>
            <div className="col-md-3">
              <SearchingCriterias
                handleChangeOldToYoung={this.handleChangeOldToYoung}
                handleChangeYoungToOld={this.handleChangeYoungToOld}
              />
              <LikedPets />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
